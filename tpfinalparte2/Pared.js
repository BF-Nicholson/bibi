class pared {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }
  dibujar() {
    fill(0);
    rect(this.posX, this.posY, 40, 40);
  }
}
