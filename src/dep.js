export default class Dep{
  constructor(){
    this.deps = []
  }
  // sub 是一个watcher
  addDep(sub){
    this.deps.push(sub)
  }
  notify(){
    this.update()
  }
  update(){
    this.deps.forEach(sub => sub.update())
  }
}

Dep.target = null 