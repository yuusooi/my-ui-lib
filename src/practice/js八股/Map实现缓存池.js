function createCacheFunction(fn) {
  const cache = new Map()

  return function (...args) {
    const key = JSON.stringify(args)

    if (cache.has(key)) {
      console.log('存在缓存：', args)
      return cache.get(key)
    }

    console.log('进行计算：', args)
    const res = fn.apply(this, args)

    cache.set(key, res)

    return res
  }
}

// 测试
// 模拟耗时计算
const slowSquare = (n) => {
  return n * n
}

const fastSquare = createCacheFunction(slowSquare)

console.log(fastSquare(5))
console.log(fastSquare(5))
console.log(fastSquare(6))
// 可用Quokka测试
