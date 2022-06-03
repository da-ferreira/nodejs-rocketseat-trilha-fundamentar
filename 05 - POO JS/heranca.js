class Veiculo {
	rodas = 4;

	mover(direcao) {}
	virar(direcao) {}
}

class Moto extends Veiculo {
	constructor() {
		super(); // Puxa atributos e métodos da classe Pai
		this.rodas = 2;
	}
}
