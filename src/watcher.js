import Dep from './dep'
export default class Watcher{
  constructor(vm, expOrFn, cb){
    this.vm = vm
    this.expOrFn = expOrFn
    this.cb = cb
    Dep.target = this 
    this.get()
    Dep.target = null 
  }
  update(){
    const value = this.get()
    if(value !== this.value){
      this.value = value 
      this.cb.call(this.vm)
    }
  }
  get(){
    const value = this.vm._data[this.expOrFn]
    return value 
  }
}