const interval = setInterval(() => {
  console.log('let"s see')
}, 2000)

setTimeout(() => {
  clearInterval(interval)
}, 10000)
