// 接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。
//更常用，用于约束数据结构
interface Homework {
  // ? 声明属性为可选属性（接下来创建相应对象可以选该属性可以不选）
  // | 声明属性类型允许为多种类型
  id: number
  name?: string
  createTime?: string
}
const homework: Homework = { id: 12323 }
interface Address {
  id: number | string
  detail?: string
  //声明一个函数
  get?: (a: number, b: string) => void //后面跟着的是返回类型
}
//直接声明类型的约束：
//严格约束，自定义属性编译都过不去
// const address: Address = {id: 12, sdf: 'sadf'}
//断言，里面的属性如果指定类型里有的话，就一定受到断言类型的约束，但是属性类型或者函数数目可以大于等于断言的类型（编译时能过去），但是使用时自定义的用不了。
//既无法在声明时约束，只能在使用时约束
//断言能不用尽量不用
const address = { id: 12, sdf: 'sadf' } as Address
// address.sdf是错误的
//声明在独立的类型文件中，export供外界使用,若是公有的接口等则一定要加上export暴露出去
export interface User {
  id?: number
  name?: string
  address?: Address
  addresses?: Address[]
  insertTime?: string
  sex?: string
  homeWork?: Homework[]
}
const user: User = {}
//同时也可以暴露对象
export default { user, address }
