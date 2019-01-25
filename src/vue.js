import { observe } from './observe'
import Watcher from './watcher'
export default class Vue {
  constructor(option = {}){
    this._data = option.data
    // 代理data 
    this._proxy(this._data)
    // 添加观察者
    observe(this._data)
  }
  $watch(expOrFn, cb){
    new Watcher(this, expOrFn, cb)
  }
  _proxy(ob){
    Object.keys(ob).forEach(key => {
      Object.defineProperty(this, key, {
        configurable: true,
        enumerable: true ,
        get: () => ob[key],
        set: val => ob[key] = val
      })
    })
  }
}