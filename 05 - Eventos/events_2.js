const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
	this.name = name
}

// Fazenco com que Character herde as funcionalidades de EventEmitter
inherits(Character, EventEmitter)

let chapolin = new Character('Chapolin')

chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado`))

chapolin.emit('help')
