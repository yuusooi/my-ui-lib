// 浅拷贝 vs 深拷贝
// 注意：slice()、concat()、[...arr] 做的都是浅拷贝 (Shallow Copy)。

// 如果你的数组是多层嵌套的（例如 [{ a: { b: 1 } }]），
// 单纯用 [...arr] 复制后，修改内部深层对象的属性，
// 依然会影响原数据（虽然 React 可能会更新，但这违反了纯函数原则）。
// 解决方案：
// 手动层层拷贝
// structuredClone(arr) (现代浏览器原生深拷贝)。
// 使用 Immer.js (工业级标准)：
// Immer 让你用 Mutating 的写法，自动生成 Non-mutating 的结果
import produce from 'immer'
const nextState = produce(baseState, (draft) => {
  draft[1].done = true // 随便改，Immer 会帮你处理
  draft.push({ title: 'Tweet about it' })
})
