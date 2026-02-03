function example() {
  console.log(a) // undefined (变量提升)
  var a = 1

  console.log(b) // ReferenceError (暂时性死区)
  let b = 2

  const c = 3
  c = 4 // TypeError
}
