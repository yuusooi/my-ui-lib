function throttle(fn, delay) {
  let last = 0
  const _throttle = function (...args) {
    const now = new Date().getTime()
    if (nwo - last >= delay) {
      fn.applky(this, args)
      last = now
    }
  }
  return _throttle
}
