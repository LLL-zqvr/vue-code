#### 如何运行ts文件

1. 先将ts文件编译成js文件（注：路径要写对）: tsc .\src\views\test\test.ts
2. 运行js文件（注：路径同样要写对）: node .\src\views\test\test.js

#### ts中的数据类型（注：ts和js里面都没有整数类型）

##### number类型

数字类型 number
双精度 64 位浮点值。它可以用来表示整数和分数。

let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744; // 八进制
let decLiteral: number = 6; // 十进制
let hexLiteral: number = 0xf00d; // 十六进制

##### 字符串类型

字符串类型 string
一个字符系列，使用单引号（'）或双引号（"）来表示字符串类型。反引号（`）来定义多行文本和内嵌表达式。

let name: string = "Runoob";
let years: number = 5;
let words: string = `您好，今年是 ${ name } 发布 ${ years + 1} 周年`;

##### 布尔类型

布尔类型 boolean
表示逻辑值：true 和 false。

let flag: boolean = true;

##### 数组类型

数组类型 无
声明变量为数组。

// 在元素类型后面加上[]
let arr: number[] = [1, 2];

// 或者使用数组泛型
let arr: Array<number> = [1, 2];

##### 元组

元组 无
元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。

let x: [string, number];
x = ['Runoob', 1]; // 运行正常
x = [1, 'Runoob']; // 报错
console.log(x[0]); // 输出 Runoob

##### 枚举

枚举 enum
枚举类型用于定义数值集合。

enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c); // 输出 2

##### void

void void
用于标识方法返回值的类型，表示该方法没有返回值。

function hello(): void {
alert("Hello Runoob");
}

##### 任意类型 any

1. 声明为 any 的变量可以赋予任意类型的值。

2. 针对于编译时数据类型不明确的时候，一般分为三种情况：

   1. 变量的值会动态改变时，比如来自用户的输入，任意值类型可以让这些变量跳过编译阶段的类型检查，示例代码如下：

   let x: any = 1;
   x = 'I am who I am';  
   x = false;

   2. 改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查，示例代码如下：
      let x: any = 4;
      x.ifItExists(); // 正确，ifItExists方法在运行时可能存在，但这里并不会检查
      x.toFixed(); // 正确

   3. 定义存储各种类型数据的数组时，示例代码如下：

   let arrayList: any[] = [1, false, 'fine'];
   arrayList[1] = 100;

##### null和undefined

1.  null表示为空，是只有一个值的特殊类型，用typeof检验null返回的是object类型。
2.  undefined指的是一个没有设置值的变量，用typeof检验undefined返回的是undefined类型。

##### never

1. never是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。这意味着声明为 never 类型的变量只能被 never 类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环）。

2. 当一个函数永不返回时（或者总是抛出错误），它的返回值为 never 类型。void 类型可以被赋值（在 strictNullChecking 为 false 时），但是除了 never 本身以外，其他任何类型不能赋值给 never。

#### ts的变量

1. TypeScript 变量的命名规则：

2. 变量名称可以包含数字和字母。

3. 除了下划线 \_ 和美元 $ 符号外，不能包含其他特殊字符，包括空格。

4. 变量名不能以数字开头。

#### ts函数

1. 语法格式如下所示：

function function_name(参数)
{
// 执行代码
}

2. 有时，我们会希望函数将执行的结果返回到调用它的地方。

通过使用 return 语句就可以实现。

在使用 return 语句时，函数会停止执行，并返回指定的值。

语法格式如下所示：

function function_name():return_type {
// 语句
return value;
}
另：如果定义了参数则必须要传入参数，不然必须要将参数设为可选

#### TypeScript 接口

接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。
