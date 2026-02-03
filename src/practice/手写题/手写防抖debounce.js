// // 1. 先把你的防抖工具函数拿过来（就是你贴的那段代码）
// function debounce(fn, delay) {
//     let timer = null;
//     // ...args：是为了通用性
//     // 不管原函数需要几个参数，先打包带走，最后再拆包还给它。
//     const _debounce = function (...args) { // 这里接收参数
//         if(timer) clearTimeout(timer)
//         timer = setTimeout(() => {
//             // apply 把 args 数组拆开，传回给 fn
//             // 这里的 this 保证了 fn 里能用 this 指向 input 元素
//             fn.apply(this, args)
//         }, delay)
//     }
//     return _debounce
// }

// // 2. 定义具体的业务逻辑函数 (这就是 fn)
// function handleSearch(event) {
//     // 注意：这里能拿到 event，就是因为上面 ...args 的功劳
//     console.log("发起请求，搜索内容：", event.target.value);
//     console.log("这里的 this 是：", this); // 指向 input 元素
// }

// // 3. 生成一个“防抖版”的函数
// // 这一步很重要！必须用变量存起来，或者直接写在监听里
// const debouncedSearch = debounce(handleSearch, 500);

// // 4. 绑定事件
// const inputEl = document.getElementById('searchInput');

// // ❌ 错误用法：
// // inputEl.addEventListener('input', handleSearch); // 这样没防抖，打一个字请求一次

// // ✅ 正确用法：
// inputEl.addEventListener('input', debouncedSearch);

function debounce(fn, delay, immediate = false) {
  let timer = null

  const _debounce = function (...args) {
    if (timer) clearTimeout(timer)

    let callNow = immediate && !timer

    timer = setTimeout(() => {
      timer = null
      if (!immediate) {
        fn.apply(this, args)
      }
    }, delay)

    if (callNow) fn.apply(this, args)
  }
  return _debounce
}
