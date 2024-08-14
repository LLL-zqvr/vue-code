"use strict";
//当ts无法推断时(nul or undefined)，使用新操作符可以提高程序的可读性
//绝大多数情况下ts可以完成推断，不可滥用操作符
//非空断言操作符 "!"
//可选链运算符 "?"
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
var homework = { id: 12323 };
//   const address = { id: 12, sdf: 'sadf' } as Address
var address = { id: 12 };
var user = { id: 23, name: 'sdf' };
//如果user.address不存在，则无法拿到address的id，程序会报错。但这时就需要加上if来判断
if (user.address) {
    console.log(user.address.id);
}
//但是这样可读性就差了，所以可以使用一些特别的操作符来提高代码的可读性
//如上面代码可以写成：
console.log((_a = user.address) === null || _a === void 0 ? void 0 : _a.id);
//可选链运算符 "?"
//address后面的？是为address准备的
var users = [];
var user2 = users.find(function (u) { return (u.id = 888); });
console.log((_b = user2 === null || user2 === void 0 ? void 0 : user2.address) === null || _b === void 0 ? void 0 : _b.id);
//将元素加入数组中，和java有点不同。ts用的是push()；java的方法是add()
//user2可能为空，所以直接push(user2)会报错,如下:
// users.push(user2)
//所以这里又要判断：
if (user2) {
    users.push(user2); //.push()可以返回数组users的长度
}
//很麻烦，所以可以使用逻辑与运算符&&
//java中的逻辑与只支持布尔型，但是ts可以直接支持函数
//如果左不为空执行右表达式
user2 && users.push(user2);
//需求：判断user.address?.detail为不为空，为空则打印一段字符串，否则打印自己
//先是最麻烦的if
//然后可以用三元，如下:
// const a = user.address?.detail ? user.address?.detail : "sfs"
//很长，所以ts有种简化写法：
var a = (_d = (_c = user.address) === null || _c === void 0 ? void 0 : _c.detail) !== null && _d !== void 0 ? _d : 'sfs';
//不为空返回自己，否则返回字符串"sfs"
//需求：判断user2为不为空，置于数组，并返回数组长度
//push()方法本来就会返回push后的长度
var len = (_e = (user2 && users.push(user2))) !== null && _e !== void 0 ? _e : users.length;
console.log(len);
//另：非空断言操作符 "!"让编译器直接放弃监测，有隐患。尽量不用
