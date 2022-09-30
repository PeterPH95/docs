// var F = function(){};
// 与上句等价
function F() { };
Object.prototype.a = function () { console.log('a') };
Function.prototype.b = function () { console.log('b') };
var f = new F();
f.a()
// f.b()

//问：f.a()和f.b()分别打印什么
//写出函数的原型链调用
// f.a() ---> 未找到
// f.__proto__.a()(F.prototype) ---> 未找到
// f.__proto__.__proto__.a()(F.prototype.__proto__, Object.prototype) ---> 找到!

function Person(name) {
  this.name = name;
  // 在构造函数内部的this上进行定义实例属性
  this.sayIn = function () {
    console.log('my name is ', this.name);
  }
}
// 在构造函数上定义静态方法
Person.eat = function () { console.log('i can eat anything') };
// 在构造函数的原型对象上定义原型方法
Person.prototype.run = function () { console.log('i can run 100m in 9.88s') }
let person = new Person('li');
// 在构造函数生成的实例上定义实例方法
person.sayOut = function () {
  console.log('my name is out ', this.name);
}

// person.eat()//实例不能访问构造函数定义的静态方法
person.constructor.eat()
person.run()//实例可以访问构造函数原型对象上的方法