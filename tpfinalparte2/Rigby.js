class Rigby {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }
  dibujar() {
    this.sprite = image(rigbysprite, this.posX, this.posY);
  }

  teclaPresionada() {
    if (keyCode == LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode == RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode == DOWN_ARROW) {
      this.moverArriba();
    } else if (keyCode == UP_ARROW ) {
      this.moverAbajo();
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
  Cuerpo(x, y, ancho, alto) {
   
    this.anchoPj = x+ancho;
    this.altoPj = y+alto;
    

    
  }
}
