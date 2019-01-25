import Dep from './dep'

export default class Observe{
  constructor(ob){
    this.ob = ob
    this.walk(ob)
  }
  walk(ob){
    Object.keys(ob).forEach(key => this.covert(key, ob[key]))
  }
  covert(key, val){
    defineReactive(this.ob, key, val)
  }
}

export function defineReactive(ob, key, val){
  // 执行观察
  let childObserve = observe(val),
    dep = new Dep()
  Object.defineProperty(ob, key, {
    configurable: true,
    enumerable: true,
    get: () => {
      if(Dep.target){
        // 依赖收集
        // Dep.target 是一个watcher
        dep.addDep(Dep.target)
      }
      return val 
    },
    set: newVal => {
      if(newVal === val) return 
      val = newVal 
      // 如果新赋值的是个object
      childObserve = observe(val)
      dep.notify()
    }
  })
}

export function observe(ob){
  if(!ob || typeof ob != 'object') return null
  return new Observe(ob)
}

