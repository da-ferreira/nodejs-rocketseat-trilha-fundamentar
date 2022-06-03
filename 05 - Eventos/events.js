// Função do tipo Classe
const { EventEmitter } = require('events')

const ev = new EventEmitter()

// Ouvindo eventos (sempre). Quando ele ouvir o evento irá executar alguma ação
ev.on('saySomething', (message) => {
	console.log(`Eu ouvi o evento, ${message}`)
})

// Ouvindo eventos uma única vez
ev.once('Unique', () => {
	console.log('Evento UNIQUE')
})

// Emitindo eventos
ev.emit('saySomething', 'Mensagem 1')
ev.emit('saySomething', 'Mensagem 2')
ev.emit('saySomething', 'Mensagem 3')
ev.emit('saySomething', 'Mensagem 4')
ev.emit('saySomething', 'Mensagem 5')

ev.emit('Unique')
ev.emit('Unique')
ev.emit('Unique')
