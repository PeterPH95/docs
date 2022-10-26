// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   });
// }

// timeout(100).then((value) => {
//   console.log(value);
// });

// let pro = new Promise((resolve, reject) => {
//   resolve(new Error('出错辣！！'))
// })
// pro.then(res => {
//   console.log(res.message);
//   return res;//返回promise包装的对象
// }).then(res => {
//   console.log(res.constructor);
// })

// function clone(target, map = new WeakMap()){
//   // 判断是否是对象
//   if(typeof target !== 'object'){
//       return target
//   }else{
//       let cloneTarget = Array.isArray(target) ? [] : {}
//       /* 每次遍历对象属性时，判断是否循环引用 */
//       if(map.has(target)){
//           return map.get(target)
//       }
//       map.set(target, cloneTarget)
//       for(var key in target){
//           cloneTarget[key] = clone(target[key], map)// map需传出共享
//       }
//       return cloneTarget
//   }
// }

// let obj = {a:1,b:2}
// obj.c = obj

// let cobj = clone(obj)
// console.log(cobj);

// var result = 10
// function test(result){
//  result=1;
// }
// test(2);
// console.log(global.result);

// let num = 10000000
// let sum = 0
// function res(num) {
//   for (let i = 0; i < num; i++) {
//     if (i.toString().indexOf("4") !== -1) {
//       sum++
//     }
//   }
// }
// res(num)
// console.log(num-sum)


// 10.25 函数柯里化
// var fn = function (a, b, c) {return a + b + c}
// function curryIt(fn) {
//     return function fun(a){
//         // 原函数参数的个数为1时，直接执行
//         if(fn.length === 1){
//             return fn(a)
//         }
//         // 
//         fn = fn.bind(this, a)
//         return fun
//     }
// }

// curryIt(fn)(1)(2)(3)