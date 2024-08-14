var Student = /** @class */ (function () {
  //构造函数
  function Student(name) {
    this.name = name
  }
  //方法
  Student.prototype.study = function () {
    console.log('学生需要的不只是书本的学习。')
  }
  return Student
})()
