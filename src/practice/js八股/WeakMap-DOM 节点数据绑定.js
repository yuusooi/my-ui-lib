// 1. 创建全局 WeakMap
const wm = new WeakMap()

let btn = document.querySelector('#myBtn')

// 2. 绑定数据（弱引用）
wm.set(btn, { clickCount: 0 })

// 3. 按钮被移除
document.body.removeChild(btn)
btn = null

// 自动清理
// JS引擎发现btn对象没有任何强引用了（变量、DOM树都没了）。
// 所以垃圾回收器GC会直接回收btn对象。
// WeakMap里的这条 { clickCount: 0 } 数据也会自动消失。
// 内存不会泄露
