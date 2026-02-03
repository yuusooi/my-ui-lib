function mySetInterval(fn, delay) {
  // 1. 定义一个控制器对象，用于存储定时器 ID
  // 为什么要用对象？为了在闭包里能引用到最新的 timer ID
  const controller = { timer: null }

  const loop = () => {
    // 2. 先执行任务
    // 注意：如果是异步任务(Promise)
    // 这里需要改成 async/await 才能真正等到任务结束
    fn()

    // 3. 任务执行完后，再递归调用 loop
    // 这样保证了 delay 时间是从任务【结束】那一刻开始算的
    controller.timer = setTimeout(loop, delay)
  }

  // 4. 启动第一次
  controller.timer = setTimeout(loop, delay)

  // 5. 返回清理函数 (模拟 clearInterval)
  return () => {
    clearTimeout(controller.timer)
  }
}

// 假设这是一个耗时任务
const task = () => {
  console.log('开始跑任务...', new Date().getSeconds())
  // 模拟耗时操作 (空循环)
  const start = Date.now()
  while (Date.now() - start < 2000) {} // 强行卡死 2 秒
  console.log('任务跑完了！')
}

// 使用我们的 mySetInterval，间隔设为 1 秒
// 预期：任务跑 2 秒 -> 休息 1 秒 -> 任务跑 2 秒... (总间隔 3 秒)
const clear = mySetInterval(task, 1000)

// 10秒后停止
setTimeout(() => {
  clear()
  console.log('停止计时')
}, 10000)

// function mySetInterval(fn,delay) {
//     const controller = {timer: null};

//     const loop = () => {
//         fn();

//         controller.timer = setTimeout(loop,delay);
//     }

//     controller.timer = setTimeout(loop,delay);

//     return () => {
//         clearTimeout(controller.timer);
//     }
// }

// const task = () => {
//     console.log('start',new Date().getSeconds());
//     const start = Date.now();
//     while (Date.now() - start < 2000) {}
//     console.log('finished')
// }

// const clear = mySetInterval(task,1000);

// setTimeout(() => {
//     clear();
//     console.log('end');
// },10000);
