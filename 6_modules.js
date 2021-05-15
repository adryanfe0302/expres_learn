// modules

const sayHi = require('./3_utils')
const { john, peter, secret } = require('./2_name')
const arr = require('./4_alt_module')
const { singlePerson } = require('./4_alt_module')

sayHi(john)
sayHi(peter)
sayHi(secret)
console.log(arr)
