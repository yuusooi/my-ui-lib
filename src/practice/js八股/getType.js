function getType(val) {
  const type = Object.prototype.toString.call(val)

  return type.slice(8, -1)
}

// --- 基础类型 ---
getType(1) // 'Number'
getType('hello') // 'String'
getType(true) // 'Boolean'
getType(Symbol()) // 'Symbol'
getType(1n) // 'BigInt' (ES2020)

// --- 也就是 typeof 搞不定的那些 ---
getType(null) // 'Null'  <-- 完美解决 typeof null === 'object' 的 Bug
getType(undefined) // 'Undefined'

// --- 引用类型 (面试重点) ---
getType([]) // 'Array' <-- 完美区分 Array 和 Object
getType({}) // 'Object'
getType(new Date()) // 'Date'
getType(/abc/) // 'RegExp'
getType(new Error()) // 'Error'

// --- 函数 ---
getType(function () {}) // 'Function'

// ⬇️ 这样写，结果一定会显示在行尾
console.log(getType(123)) // Quokka 显示：'Number'
console.log(getType(/abc/)) // Quokka 显示：'RegExp'
