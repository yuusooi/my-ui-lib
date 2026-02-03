const parseUrl = (url) => {
  const tmpUrl = url.split('?')[1]
  const resObj = {}
  for (const str of tmpUrl.split('&')) {
    let [key, value] = str.split('=')
    value = decodeURIComponent(value) //URL解码
    if (resObj.hasOwnProperty(key)) {
      resObj[key] = [].concat(resObj[key], value)
    } else if (value === 'undefined') {
      resObj[key] = true
    } else {
      resObj[key] = value
    }
  }
  return resObj
}

const ans = parseUrl('https://a.com?a=1&b=2&b=3&c=undefined')
console.log(ans)

function parseParam_1(url) {
  const params = {}

  // 核心正则 (背诵级)
  // /g 全局匹配，必须加，否则只匹配第一个
  // ([^?&=]+)  -> 分组1 (Key): 匹配除了 ? & = 之外的任意字符 (1个或多个)
  // =           -> 匹配字面量 =
  // ([^&]*)     -> 分组2 (Value): 匹配除了 & 之外的任意字符 (0个或多个)
  const regex = /([^?&=]+)=([^&]*)/g

  // 使用 replace 进行"副作用"遍历
  // 虽然叫 replace，但我们不关心返回值，只利用它的回调函数来填充 params
  // 参数：match(整个匹配串), key(分组1), value(分组2)
  url.replace(regex, (match, key, value) => {
    // 细节：必须解码，否则中文会乱码
    params[key] = decodeURIComponent(value)
  })

  return params
}

function parseParam_2(url) {
  // 1. 提取 ? 及其后面的字符串 (防止 url 里没有 ?)
  const search = url.split('?')[1] || ''

  // 2. 使用标准 API 解析
  const params = new URLSearchParams(search)

  // 3. 转换为普通对象
  return Object.fromEntries(params.entries())
}

// 测试
console.log(parseParam_2('https://www.google.com?a=1&b=2&c=3'))
// 输出: { a: '1', b: '2', c: '3' }
