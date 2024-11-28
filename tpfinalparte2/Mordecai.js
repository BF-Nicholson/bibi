class mordecai {
  constructor() {
    this.posX = 50-10;
    this.posY = 50-10;
  }
  dibujar() {
    this.sprite = image(mordecaisprite, this.posX, this.posY);
  }
}
