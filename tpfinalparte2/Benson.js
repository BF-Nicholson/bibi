class benson {
  constructor() {
    this.posX = 50-20;
    this.posY = 50-20;
  }
  dibujar() {
    this.sprite = image(bensonsprite, this.posX, this.posY);
  }
  Perseguir(posX, posY) {
    this.posXpj = posX;
    this.posYpj = posY;

    if (this.posX < this.posXpj) {
      this.posX += 0.9;
    } else if (this.posX > this.posXpj) {
      this.posX -= 0.9;
    }
    if (this.posY < this.posYpj) {
      this.posY +=0.9;
    } else if (this.posY > this.posYpj) {
      this.posY -=0.9;
    }
  }
  Colisionar() {
    if (this.posX === this.posXpj) {
      Perder();
    } else if (this.posY === this.posYpj) {
      Perder();
    }
  }
}
