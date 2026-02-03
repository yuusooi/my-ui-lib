function create(proto) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('Object prototype may only be an Object or null')
  }
  function F() {} //创建临时构造函数
  F.prototype = proto //将原型指向传入对象
  return new F() //返回new的实例
}
