// 全局存储池
let states = []
let index = 0

function useState(initialValue) {
  // 1. 捕获当前的索引 (利用闭包，让 setState 知道自己改的是第几个状态)
  const currentIndex = index

  // 2. 初始化状态 (如果该位置还没值，就填入初始值)
  states[currentIndex] =
    states[currentIndex] === undefined ? initialValue : states[currentIndex]

  // 3. 定义 setter
  // 注意：这里必须用 currentIndex，不能用全局 index
  const setState = (newState) => {
    states[currentIndex] = newState
    render() // 触发重绘
  }

  // 4. 移动光标，为下一个 useState 腾位置
  index++

  return [states[currentIndex], setState]
}

// 模拟渲染过程
function render() {
  index = 0 // 每次渲染前，重置索引
  ReactDOM.render(<App />, document.getElementById('root'))
}
