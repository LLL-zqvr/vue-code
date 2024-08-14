//变量的值是动态改变且不知数据类型时any
let x: any = 1
x = 'who I am'
x = false
x = null
x = undefined
//null为空，undefined表示没有设置值的一个变量
let y: number | null | undefined
y = null
//never
let num1 = 1
let num2 = 3
console.log(num1 + num2)
// let a: never
// a = (() => {
//   throw new Error('exception')
// })()
//tsc .\src\views\typescrit-practice\practice1-data_type.ts
//node .\src\views\typescrit-practice\practice1-data_type.js
