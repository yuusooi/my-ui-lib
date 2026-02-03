// 数组扁平化
// 这个是像原生flat默认只拍平一层的，
// 如果是多维数组把depth = 1改成depth = Infinity即可
const flat = (arr, depth = 1) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i] && depth)) {
      res = concat(flat(flat(arr[i], depth - 1)))
    } else {
      res.push(arr[i])
    }
  }
  return res
}

// 对象扁平化
function objectFlat(obj = {}) {
  const res = {}
  function flat(item, preKey = '') {
    Object.entries(item).forEach(([key, val]) => {
      const newKey = preKey ? `${preKey}.${key}` : key
      if (val && typeof val == 'object') {
        flat(val, newKey)
      } else {
        res[newKey] = val
      }
    })
  }
  flat(obj)
  return res
}

// 测试
const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } }
console.log(objectFlat(source))

// 递归+reduce
function myFlat(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? myFlat(cur) : cur)
  }, [])
}
