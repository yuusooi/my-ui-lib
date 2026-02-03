// const curry = (fn,...args) => {
//     if (args.length >= fn.length) {
//         return fn(...args)
//     }
//     return (...rest) => {
//         return curry(fn,...args,...rest)
//     }
// }

// 函数柯里化：把一个接受多个参数的函数，变成一系列接收部分参数的函数
// 攒参数：没攒够时返回一个新函数继续攒，攒够了立马执行原函数
// bfe
function curry(fn) {
  return function curried(...args) {
    // fn.length 是函数原生的属性，表示它声明时定义的参数个数
    // args.length是当前已经收集到的参数个数
    // 攒够了，把收集到的args全部传给原函数执行并且返回结果
    if (fn.length <= args.length) {
      //
      return fn(...args)
    }

    // 没攒够，返回一个新的匿名函数，继续等待解释剩余参数...rest
    return (...rest) => {
      // 递归要点：将之前的参数...agrs和新来的参数...rest合并
      // 再次调用curried函数进行检查
      return curried(...args, ...rest)
    }
  }
}

// 测试
function sum(a, b, c) {
  return a + b + c
}
const curriedSum = curry(sum)
console.log(curriedSum(1)(2)(3)) // 6
