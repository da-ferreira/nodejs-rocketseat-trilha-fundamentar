// Módulo nativo do node:
const path = require('path');
console.log(path.basename(__filename));

// Importando meu módulo:
const myModule = require('./exports');
console.log(myModule);
