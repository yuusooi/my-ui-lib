const p = new Promise((resolve, reject) => {
  console.log('开始')

  resolve(1)
  reject(2)
})

p.then(
  (val) => console.log('Fulfill成功:', val),
  (err) => console.log('Rejected失败:', err)
)

const promise1 = Promise.resolve(3)
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo')
})
const promise3 = Promise.reject('error')

Promise.all([promise1, promise2])
  .then((values) => console.log(values)) // [3, "foo"]
  .catch((error) => console.log(error))

Promise.race([promise1, promise2]).then((value) => console.log(value)) // 3 (更快完成)

const p2 = new Promise((resolve) => resolve(10))

p2.then((val) => {
  console.log('第一层收到:', val) // 10
  return val * 2 // 返回普通值 20
})
  .then((val) => {
    // 这里的 val 就是上面 return 的 20
    // 因为上面的 .then 产生了一个新的、状态为 Fulfilled(20) 的 Promise
    console.log('第二层收到:', val) // 20
    // 如果这里不写 return，默认返回 undefined
  })
  .then((val) => {
    console.log('第三层收到:', val) // undefined
  })

const p3 = Promise.resolve('start')

p3.then((data) => {
  console.log(data)

  // 返回一个新的异步Promise
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('slow')
    }, 2000)
  })
}).then((data) => {
  // .then等2秒的Promise结束后才执行。
  // 而且它收到的data，就是上面resolve的值。
  console.log('receive:', data) // 输出: "slow"
})

Promise.resolve(1)
  .then((val) => {
    console.log(val)
    // 抛出错误
    throw new Error('抛错')
  })
  .then((val) => {
    console.log('永远不执行')
  })
  .catch((err) => {
    // 这里的 err 就是上面 throw 的 Error 对象
    console.log('捕获错误:', err.message) // '捕获错误:' "抛错"
  })

// 串行执行 (基本操作)
// 这是最常见的场景：后一个请求依赖前一个请求的结果。
// 逻辑： 请求A -> 等待A完成 -> 拿到结果 -> 请求B。
// 模拟一个异步请求函数，返回 Promise
function request(time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`完成耗时 ${time}ms`), time)
  })
}

// ✅ async/await 写法
async function runSerial() {
  console.log('开始')

  // 1. 代码执行到这里会暂停，直到 request(1000) 返回结果
  const r1 = await request(1000)
  console.log('第一步:', r1) // 1秒后打印

  // 2. 这里才开始执行第二次请求
  const r2 = await request(500)
  console.log('第二步:', r2) // 再过0.5秒后打印
}

runSerial()

function requestError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('服务器炸了'), 1000)
  })
}

async function runError() {
  try {
    console.log('尝试请求...')
    // 1. 等待请求，如果 promise reject，这里直接抛错，跳进 catch
    const res = await requestError()
    console.log('成功:', res) // 这行不会执行
  } catch (err) {
    // 2. 捕获错误
    console.error('捕获到错误:', err) // 输出: 捕获到错误: 服务器炸了
  }
}

runError()

// function requestError() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => reject('error'),1000);
//     });
// }

// async function runError() {
//     try {
//         console.log("try");
//         const res = await requestError();
//         console.log("success:",res);
//     } catch(err) {
//         console.error("catch error:",err)
//     }
// }

// runError()
