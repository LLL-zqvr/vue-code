//变量的值是动态改变且不知数据类型时any
var x = 1
x = 'who I am'
x = false
x = null
x = undefined
//null为空，undefined表示没有设置值的一个变量
var y
y = null
//never
var num1 = 1
var num2 = 3
console.log(num1 + num2)
// let a: never
// a = (() => {
//   throw new Error('exception')
// })()
//tsc .\src\views\typescrit-practice\practice1-data_type.ts
//node .\src\views\typescrit-practice\practice1-data_type.js
