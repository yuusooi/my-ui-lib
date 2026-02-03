const thousandSplit = function (n) {
  let numStr = n.toString()

  let parts = numStr.split('.')
  let integerPart = parts[0]
  let decimalPart = parts.length > 1 ? '.' + parts[1] : ''

  let prefix = ''
  if (integerPart.startsWith('-')) {
    prefix = '-'
    integerPart = integerPart.slice(1)
  }

  let arr = []
  let count = 0

  for (let i = integerPart.length - 1; i >= 0; i--) {
    arr.push(integerPart[i])
    count++

    if (count % 3 === 0 && i !== 0) {
      arr.push(',')
    }
  }

  let formattedInt = prefix + arr.reverse().join('')

  return formattedInt + decimalPart
}

console.log(thousandSplit(1234567.89)) // "1,234,567.89"
console.log(thousandSplit(123)) // "123"
console.log(thousandSplit(-1234567)) // "-1,234,567"
console.log(thousandSplit(1000)) // "1,000"
