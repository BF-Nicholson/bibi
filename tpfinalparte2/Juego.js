class juego {
  constructor() {
    
    this.rigby = new rigby();
    this.mordecai;
    this.benson;
    
    this.pared = [];
    for(let i=0; i<10; i++){
    this.pared[i] = new pared();
    }
  }
  iniciar() {
  }
  perder() {
  }
  crearLaberinto() {
  }
  colisionar() {
  }
}
