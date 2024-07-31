// 接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。
interface Homework {
  // ? 声明属性为可选属性
  // | 声明属性类型允许为多种类型
  id: number
  name?: string
  createTime?: string
}
const homework: Homework = { id: 12323 }
//声明在独立的类型文件中，export供外界使用
export interface User {
  id?: number
  name?: string
  address?: string
  insertTime?: string
  sex?: string
  homeWork?: Homework[]
}
