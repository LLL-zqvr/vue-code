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
var a
// a = (function () {
//     throw new Error('exception');
// })();
