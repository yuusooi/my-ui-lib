Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    for (const item of promises) {
      Promise.resolve(item).then(resolve, reject)
    }
  })
}

const p1 = new Promise((r) => setTimeout(r, 500, 'slow'))
const p2 = new Promise((r) => setTimeout(r, 100, 'fast'))

Promise.myRace([p1, p2]).then(console.log)
