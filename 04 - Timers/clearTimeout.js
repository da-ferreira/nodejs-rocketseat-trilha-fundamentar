// clarTimeout vai cancelar um timeOut

const timeOut = 3000
const finished = () => console.log('done')

let timer = setTimeout(finished, timeOut)

console.log(timer)
clearTimeout(timer) // Cancela o timeOut
console.log(timer)
