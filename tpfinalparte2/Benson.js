class benson {
  constructor() {
    this.posX = 50-20;
    this.posY = 50-20;
    this.tamPj=30;
  }
  dibujar() {
    push();
    imageMode(CENTER);
    this.sprite = image(bensonsprite, this.posX, this.posY);
    pop();
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
  Colisionar(posX_, posY_, tam_) {
    this.posXpj = posX_;
    this.posYpj = posY_;
    this.tamDelPersonaje=tam_;

    this.distanciaConElpersonaje=dist(this.posXpj, this.posYpj, this.posX, this.posY);
    if (this.distanciaConElpersonaje<this.tamDelPersonaje) {
      return true
    } else {
      return false
    }
  }
}
