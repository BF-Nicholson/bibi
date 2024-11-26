class rigby {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }
  dibujar() {
    this.sprite = image(rigbysprite, this.posX, this.posY);
  }
}
