//若只有类型时，类型前用的是type进行声明,此时的type在括号外；

import type { User } from '../practice10/practice10-interface'

//但是若引用的又有函数又有类型，则type要写在{}里面的对应类型中，如：
//(一个例子，乱写的)
// import {
//     createRouter,
//     createWebHistory,
//     type Address,
// } from 'vue-router'
//解构：用于拆分现有数据的方式，可以得到一个类型中的其他数据类型或者函数
const user: User = {
  id: 45,
  name: 'yumu',
  address: { id: 1 },
  addresses: [{ id: 1 }]
}
//想要得到user这个变量中的id
//最经典的方法，直接点出来
user.id
//也可以使用解构这种方法。
const { id } = user
