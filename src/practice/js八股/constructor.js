// --- 基础类型 ---
console.log((1).constructor === Number) // true
'hello'.constructor === String // true
true.constructor === Boolean // true

// --- 引用类型 ---
;[].constructor === Array // true
;({}).constructor === Object // true
new Date().constructor === Date // true

// --- 自定义类 ---
class Person {}
const p = new Person()
p.constructor === Person // true
