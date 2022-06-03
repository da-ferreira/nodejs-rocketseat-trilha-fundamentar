/* 
    Cancela um setInterval registrado
*/

const checking = () => console.log('checking!')
let interval = setInterval(checking, 1000)

setTimeout(() => clearInterval(interval), 4000)
