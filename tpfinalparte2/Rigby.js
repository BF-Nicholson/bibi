class Rigby {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }
  dibujar() {
    this.sprite = image(rigbysprite, this.posX, this.posY);
  }

  teclaPresionada(key) {
    if (key == LEFT_ARROW) {
      this.rigby1.moverIzquierda();
    } else if (key == RIGHT_ARROW) {
      this.rigby1.moverDerecha();
    } else if (key == UP_ARROW) {
      this.rigby1.moverArriba();
    } else if (key == DOWN_ARROW ) {
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
