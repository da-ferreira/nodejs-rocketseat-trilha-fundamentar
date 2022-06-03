class Poligono {
	constructor(altura, largura) {
		this.altura = altura;
		this.largura = largura;
	}

	get area() {
		return this.#calcularArea();
	}

	// Método privado
	#calcularArea() {
		return this.altura * this.largura;
	}
}

let poligono = new Poligono(10, 12);
console.log(poligono.area);
