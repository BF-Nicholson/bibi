class rigby {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }
  dibujar() {
    this.sprite = image(rigbysprite, this.posX, this.posY);
  }

  teclaPresionada(keyCode) {
    if (keyCode == 'a' || keyCode == 'A') {
      this.rigby1.moverIzquierda();
    } else if (keyCode == 'd' || keyCode == 'D') {
      this.rigby1.moverDerecha();
    } else if (keyCode == 'w' || keyCode == 'W') {
      this.rigby1.moverArriba();
    } else if (keyCode == 's' || keyCode == 'S') {
      this.rigby1.moverAbajo();
    }
  }

  moverDerecha() {
    this.posX += 10;
  }
  moverIzquierda() {
    this.posX -= 10;
  }
  moverArriba() {
    this.posY += 10;
  }
  moverAbajo() {
    this.posY -= 10;
  }
}
