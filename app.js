const _ = require('lodash')

const item = [1, [2, [3 , [4]]], 12, ['sasa'], {'age': '21'}]

const newItems = _.flattenDeep(item)
console.log(newItems)