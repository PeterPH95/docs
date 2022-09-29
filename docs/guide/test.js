// var F = function(){};
// 与上句等价
function F(){};
Object.prototype.a = function(){console.log('a')};
Function.prototype.b = function(){console.log('b')};
var f = new F();
f.a()
f.b()

//问：f.a()和f.b()分别打印什么
//写出函数的原型链调用
// f.a() ---> 未找到
// f.__proto__.a()(F.prototype) ---> 未找到
// f.__proto__.__proto__.a()(F.prototype.__proto__, Object.prototype) ---> 找到!