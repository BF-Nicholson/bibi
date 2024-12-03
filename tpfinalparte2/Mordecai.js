class mordecai {
  constructor() {
    this.posX = 50-10;
    this.posY = 50-10;
  }
  dibujar() {
    imageMode(CENTER);
    this.sprite = image(mordecaisprite, this.posX, this.posY);
  }
  Fiesta(posX, posY) {
    this.posXpj = posX;
    this.posYpj = posY;

    if (this.posX === this.Cuerpo) {
      this.posX = 0;
    } else if (this.posY === this.Cuerpo){
     this.posY = 0; 
    }

    if (this.posX < this.posXpj ) {
      this.posX += 0.9;
    } else if (this.posX > this.posXpj ) {
      this.posX -= 0.9;
    }
    if (this.posY < this.posYpj+40) {
      this.posY +=0.9;
    } else if (this.posY > this.posYpj+40) {
      this.posY -=0.9;
    }
  }
}
