class Mordecai {
  constructor() {
    this.posX = 100;
    this.posY = 100;
    this.tam = 30; // Tamaño del personaje
  }

  dibujar() {
    push();
    imageMode(CENTER);
    image(mordecaisprite, this.posX, this.posY); // Dibuja la imagen de Mordecai
    pop();
  }
}
