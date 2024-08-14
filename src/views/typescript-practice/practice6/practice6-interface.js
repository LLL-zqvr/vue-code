"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var homework = { id: 12323 };
//直接声明类型的约束：
//严格约束，自定义属性编译都过不去
// const address: Address = {id: 12, sdf: 'sadf'}
//断言，里面的属性如果指定类型里有的话，就一定受到断言类型的约束，但是属性类型或者函数数目可以大于等于断言的类型（编译时能过去），但是使用时自定义的用不了。
//既无法在声明时约束，只能在使用时约束
//断言能不用尽量不用
var address = { id: 12, sdf: 'sadf' };
var user = {};
//同时也可以暴露对象
exports.default = { user: user, address: address };
