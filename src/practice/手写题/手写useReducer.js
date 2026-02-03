import { useState, useCallback } from 'react'

function myUseReducer(reducer, initialArg, init) {
  // 1. 初始化 State，支持惰性初始化
  // 如果传了 init 函数，这就等于 init(initialArg)
  // 如果没传，就等于 initialArg
  const [state, setState] = useState(() => {
    return init ? init(initialArg) : initialArg
  })

  // 2. 实现 dispatch 函数
  // dispatch 的引用地址应该是稳定的 (所以用 useCallback)
  // 利用 setState 的函数式更新
  // setState((prev) => ...) 能拿到最新的 state (prev)
  // 然后扔给 reducer 计算，把计算结果返回给 setState 去更新
  const dispatch = useCallback(
    (action) => {
      setState((prevState) => reducer(prevState, action))
    },
    [reducer]
  )

  // 3. 返回元组
  return [state, dispatch]
}
