/* Classe abstrata */
class Parafuso {
	constructor() {
		if (this.constructor === Parafuso) {
			throw new Error('Classe abstrata não pode ser instanciada')
		}
	}

	get tipo() {
		throw new Error('Método "get tipo()" precisa ser implementado')
	}
}

class Fenda extends Parafuso {
	constructor() {
		super()
	}

	/* Implementando o método obrigatório */
	get tipo() {
		return 'Fenda'
	}
}

console.log(new Fenda().tipo)
