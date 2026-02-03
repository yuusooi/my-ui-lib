// 同步版
function compose(...funcs) {
  if (funcs.length === 0) return (arg) => arg
  if (funcs.length === 1) return funcs[0]

  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  )
}

// 异步版
// function compose(middleware) {
//   // 返回一个接收 context 和 next 的函数
//   return function (context, next) {
//     let index = -1; // 用于防止 next() 在同一个中间件中被调用多次

//     // 启动递归，从第 0 个中间件开始
//     return dispatch(0);

//     function dispatch(i) {
//       // 1. 安全检查 防止在一个中间件里多次调用 next()
//       if (i <= index) return Promise.reject(new Error('next() called multiple times'));
//       index = i;

//       // 2. 取出当前要执行的中间件 fn
//       let fn = middleware[i];

//       // 3. 边界处理：如果 i 越界了（所有中间件都跑完了），
//       //    fn 就变成用户传入的那个 next (通常是 undefined，或者是挂载的业务逻辑)
//       if (i === middleware.length) fn = next;

//       // 4. 如果没东西执行了，直接返回成功
//       if (!fn) return Promise.resolve();

//       try {
//         // 5. 核心执行逻辑
//         // Promise.resolve 包裹是为了兼容同步和异步中间件
//         // fn(context, next) -> 这里的 next 就是 dispatch.bind(null, i + 1)
//         // 也就是告诉当前中间件要是调 next()，其实就是调下一个 dispatch
//         return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
//       } catch (err) {
//         return Promise.reject(err);
//       }
//     }
//   };
// }
