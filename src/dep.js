export default class Dep{
  constructor(){
    this.deps = []
  }
  addDep(cb){
    this.deps.push(cb)
  }
  notify(){
    this.update()
  }
  update(){
    this.deps.forEach(cb => cb())
  }
}