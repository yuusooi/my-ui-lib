// 数组去重
// ES6 Set
const unique1 = (arr) => {
  return [...new Set(arr)]
  // 或者return Array.from(new Set(arr))
}

console.log(unique1([1, 2, 2, 3, '1'])) //[1,2,3,'1']

// filter + indexOf (逻辑排查)
const unique2 = (arr) => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}

console.log(unique2([1, 2, 2, 3]))

// ES6 Map
const uniqueMap = (arr) => {
  const map = new Map()
  return arr.filter((item) => {
    if (map.has(item)) {
      return false
    } else {
      map.set(item, true)
      return true
    }
  })
}

console.log(uniqueMap([1, '1', {}, {}])) //js中{} == {}，所以无法去重
