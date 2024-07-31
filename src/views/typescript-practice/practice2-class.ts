class Student {
  //字段名
  name: string
  //构造函数
  constructor(name: string) {
    this.name = name
  }
  //方法
  study(): void {
    console.log('学生需要的不只是书本的学习。')
  }
}
