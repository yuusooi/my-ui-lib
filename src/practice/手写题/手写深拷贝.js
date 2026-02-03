function deepCopy(obj, map = new WeakMap()) {
  if (!obj || typeof obj !== 'object') return obj

  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Error) return new Error(obj.message)
  if (obj instanceof Function) return obj

  // 防止循环引用,如果拷贝过则不再递归
  if (map.has(obj)) {
    return map.get(obj)
  }

  // 初始化
  const newObj = Array.isArray(obj) ? [] : {}

  // 先记录再递归
  map.set(obj, newObj)

  // 遍历属性
  Reflect.ownKeys(obj).forEach((key) => {
    // 递归调用
    newObj[key] = deepCopy(obj[key], map)
  })

  return newObj
}

const sym = Symbol('也就是个ID')

const obj = {
  name: 'Gemini',
  age: 18,
  [sym]: '我是 Symbol 属性，for...in 看不到我', // Symbol 属性
  date: new Date(),
  reg: /abc/gi,
}

// 制造循环引用
obj.self = obj

const cloneObj = deepCopy(obj)

// 验证 1: 循环引用没报错
console.log(cloneObj.self === cloneObj) // true

// 验证 2: Symbol 属性拷过来了吗？
console.log(cloneObj[sym]) // "我是 Symbol 属性..." (如果是 for...in 版本，这里是 undefined)

// 验证 3: 深拷贝是否独立
cloneObj.age = 99
console.log(obj.age) // 18 (原对象没变)
