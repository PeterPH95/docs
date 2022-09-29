---
# home: true
# heroImage: /hero.png
heroText: Hero
tagline: Hero 
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---

# Hello Peter

### 侧边栏练习
> 侧边栏需要在md文件开头设置 
```js
---
sidebar: auto
---
```

### vue2 中设置别名 @ 的方式
```js{6}
// src/build/webpack.base.conf.js 中进行配置
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
```

### require与import的区别
- 1.require是CommonJS规范的模块化语法，import是ECMAScript 6规范的模块化语法；
- 2.require是运行时加载，import是编译时加载；
- 3.require可以写在代码的任意位置，import只能写在文件的最顶端且不可在条件语句或函数作用域中使用；
- 4.require通过module.exports导出的值就不能再变化，import通过export导出的值可以改变；

```js
// m1.js
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);
// m2.js
import {foo} from './m1.js';
console.log(foo); //bar
setTimeout(() => console.log(foo), 500); //baz
```

### ! 转换规则
> !会将后面的数据先转成布尔值，然后取反。
```js{6}
var a; //a = undefined
var r = !!a; 
console.log(r) //false

!!{} // true
!![] // true
!!undefined // false
!!null // false
!!NaN //false
```

### js中操作符 ~~ 和 !!
> 利用符号进行的类型转换,转换成数字类型
```js
~~undefined //0
~~null //0
~~!undefined //1
~~!null //1

~~true //1
~~false //0
~~"" //0
~~[] //0
```

### == + 的隐式类型转换
- 类型相同
  - 基本类型，直接比较值
  - 引用类型比较指针
- 类型不同，尝试转成number类型，
  - 先调用valueOf()转成number
  - 不行就再用toString()方法转成string
- null、NaN、undefined单独一套规则
  - undefined和null与任何有有意义的值比较都是false，但null == undefined // true 
- 补充：+[] 隐式转换为Number 0

```js
//请听题
console.log(new String('abc') == true)//问题1
console.log({} == true)//问题2
console.log([] == ![])//问题3

//问题1：
console.log(new String('abc') == true)
//step1:右侧转成数字1,变成：
new String('abc')==1
//step2 new String('abc').valueOf()不是数字也不是字符串，再调用toString()
'abc' == 1
//step3:字符串转数字
NaN == 1 //false,NaN和任何类型比较都为false

//问题2：
console.log({}==true)
//step1:右侧转成数字
{} == 1
//step2 {}.valueOf()不是数字也不是字符串，再调用toString()
'[object Object]' ==1 
//step3:字符串转数字
NaN == 1 //false,NaN和任何类型比较都为false

//问题3:
console.log([]==![])
//step1:!优先级比==高，先转右边,[]是对象类型，转成布尔值为true,!true就是false
[]==false
//step2:右侧转成数字为0
[]==0
//step3:左侧是一个对象，valueOf()转出来不是字符也不是字符串，调用toString()，得到空字符串
'' == 0
//step4:字符串转成数字
0 == 0 //true

//null、NaN、undefined
console.log(NaN==NaN) //false
console.log(undefined==null) //true
console.log(null==null) //true
console.log(null==undefined) //true
undefined == undefined //true
```


### typeof
:::warning
typeof返回的类型:number、string、boolean、undefined、function、object共6种。后ES6新又增 symbol
注意：
- 其中 Array 与 null 返回的都是 object
- function(){} 与 class{}(类的本质是函数，是构造函数的另一种写法) 返回的都是 function
:::


### 原型链继承问题
```js
function F(){};
Object.prototype.a = function(){console.log('a')};
Function.prototype.b = function(){console.log('b')};
var f = new F();
//f.a()?
//f.b()?

// F instanceof Function ---> true
// f instanceof Function ---> false
// f instanceof Object ---> true

/*
f.__proto__ === [f 构造函数的].prototype === F.prototype
F.prototype.__proto__ === [F.prototype 构造函数的].prototype === Object.prototype ---> 所以 a 可以通过 f.a()访问
f.constructor === F
F.__proto__ === [F 构造函数的].prototype === Function.prototype ---> 所以 b 能通过f.constructor.b()访问
Function.prototype.__proto__ === [Function.prototype 构造函数的].prototype === Object.prototype ---> 所以 a 可以通过 f.constructor.a()访问

综上：f 能取到 a 取不到 b; F 能取到 a,b
*/
```
