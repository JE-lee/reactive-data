import Vue from '../src/vue'
const assert = require('assert')
describe('vue', function(){
  it('reactive-data', function(){
    let vm = new Vue({
      data: {
        name: 'lee'
      }
    })
    let name = '' 
    vm.$watch('name', function(){
      console.log('watch this.name', this.name)
      name = this.name 
    })

    vm.name = 'rong'
    assert.equal(name, 'rong', 'name不是rong')
  })
})