Promise.allSettled = function (promises) {
  return new Promise((resolve) => {
    const results = promises.map((promise) => {
      return promise.then(
        (value) => {
          return { status: 'fulfill', value }
        },
        (reason) => {
          return { status: 'rejected', reason }
        }
      )
    })

    Promise.all(results).then((settleResults) => {
      resolve(settleResults)
    })
  })
}

const promises = [
  Promise.resolve('First'),
  Promise.reject('Rejected'),
  Promise.resolve('Third'),
]

Promise.allSettled(promises)
  .then((results) => console.log(results))
  .catch((error) => console.error(error))
