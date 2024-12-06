class Rigby {
  constructor(posX, posY, juego) {
    this.posX = posX;
    this.posY = posY;
    this.tam = 30; // tamaño del personaje
    this.juego = juego; // referencia al objeto juego
  }

  dibujar() {
    push();
    imageMode(CENTER);
    image(rigbysprite, this.posX, this.posY); // imagen de Rigby
    pop();
  }

  teclaPresionada() {
    if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode === UP_ARROW) {
      this.moverArriba();
    } else if (keyCode === DOWN_ARROW) {
      this.moverAbajo();
    }
  }

  moverDerecha() {
    this.posX += 10; // mueve Rigby hacia la derecha si no hay colisión
  }
  moverIzquierda() {
    this.posX -= 10; // mueve Rigby hacia la izquierda si no hay colisión
  }
  moverArriba() {
    this.posY -= 10; // mueve Rigby hacia arriba si no hay colisión
  }
  moverAbajo() {
    this.posY += 10; // mueve Rigby hacia abajo si no hay colisión
  }
}
