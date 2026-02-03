class EventEmitter {
  constructor() {
    // events是hashMap
    // key事件名，value数组（内含函数）
    // 结构：{'click':[fn1,fn2],'refresh':[fn3]}
    this.events = {}
  }

  // 订阅on
  on(event, fn) {
    // 没有订阅过，初始化空数组
    if (!this.events[event]) {
      this.events[event] = []
    }

    // 回调函数入队
    this.events[event].push(fn)
  }

  // 取消订阅
  off(event, fn) {
    const handlers = this.events[event]
    // 如果没人订阅，直接返回
    if (!handlers) return

    // 查找函数在数组里的位置
    const index = handlers.indexOf(fn)

    // 找到的话splice删掉
    if (index !== -1) {
      handlers.splice(index, 1)
    }
  }

  // 发布
  emit(event, ...args) {
    const handlers = this.events[event]
    if (!handlers) return

    // 复制数组，防止回调函数内部修改数组导致循环错乱
    handlers.slice().forEach((fn) => fn(...args))
  }

  // 只监听一次，触发完立刻自动取消订阅
  once(event, fn) {
    // 创建一个马甲函数
    const onced = (...args) => {
      // 注销自己
      this.off(event, onced)
      // 执行真正业务逻辑
      fn.apply(this, args)
    }

    // 为了外部能手动off onced,挂上原函数引用
    onced.fn = fn

    // 订阅的是这个马甲
    this.on(event, onced)
  }
}
