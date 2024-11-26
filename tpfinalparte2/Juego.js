class juego {
  constructor(cantidadParedes) {
    this.cantidadParedes = cantidadParedes;
    this.crearParedes();
    this.crearPersonaje(200, height/2);
    
  }
  dibujar() {
    this.rigby1.dibujar();
    this.mordecai1.dibujar();
    this.benson1.dibujar();
    this.paredes.dibujar();
  }

  crearPersonaje() {
    this.rigby1 = new rigby(200, height/2);
    this.mordecai1 = new mordecai();
    this.benson1 = new benson();
  }

  crearParedes() {
    this.paredes = [];
    for (let i=0; i<this.cantidadParedes; i++) {
      this.paredes[i] = new pared(i*5, 100);
    }
  }
}
