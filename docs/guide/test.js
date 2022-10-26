// var F = function(){};
// 与上句等价
// function F() { };
// Object.prototype.a = function () { console.log('a') };
// Function.prototype.b = function () { console.log('b') };
// var f = new F();
// f.a()
// f.b()

//问：f.a()和f.b()分别打印什么
//写出函数的原型链调用
// f.a() ---> 未找到
// f.__proto__.a()(F.prototype) ---> 未找到
// f.__proto__.__proto__.a()(F.prototype.__proto__, Object.prototype) ---> 找到!

// function Person(name) {
//   this.name = name;
//   // 在构造函数内部的this上进行定义实例属性
//   this.sayIn = function () {
//     console.log('my name is ', this.name);
//   }
// }
// // 在构造函数上定义静态方法
// Person.eat = function () { console.log('i can eat anything') };
// // 在构造函数的原型对象上定义原型方法
// Person.prototype.run = function () { console.log('i can run 100m in 9.88s') }
// let person = new Person('li');
// // 在构造函数生成的实例上定义实例方法
// person.sayOut = function () {
//   console.log('my name is out ', this.name);
// }

// // person.eat()//实例不能访问构造函数定义的静态方法
// person.constructor.eat()
// person.run()//实例可以访问构造函数原型对象上的方法

//10.25 闭包的一道题，输出顺序？（提示：test中的n为闭包的变量，返回对象的n是对象的一个属性，add实际调用的是闭包n）
function test() {
  var n = 4399;
  function add(){
      n++;
      console.log(n);
  }
  return {n:n,add:add}
}
var result = test();
var result2 = test();
result.add();
result.add();
console.log(result.n);
result2.add();

//10.25 函数内部参数与形参重名
var foo = {n:1};
(function(foo){            //形参foo同实参foo一样指向同一片内存空间，这个空间里的n的值为1
    var foo;               //优先级低于形参，无效。
    console.log(foo.n);    //输出1
    foo.n = 3;             //形参与实参foo指向的内存空间里的n的值被改为3
    foo = {n:2};           //形参foo指向了新的内存空间，里面n的值为2.
    console.log(foo.n);    //输出新的内存空间的n的值
})(foo);
console.log(foo.n);        //实参foo的指向还是原来的内存空间，里面的n的值为3.
