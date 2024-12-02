class Salida {
  constructor(posXrect, posYrect, tamRect) {
    this.posXrect = posXrect;
    this.posYrect = posYrect;
    this.tamRect = tamRect;
  }
  dibujar() {
    push();
    rectMode(CENTER);
    fill(0, 50, 200);
    rect(this.posXrect, this.posYrect, this.tamRect, this.tamRect);
    pop();
  }
  escapar(posXpj_, posYpj_, tamRect_) {
    this.posXpj_ = posXpj_;
    this.posypj_ = posYpj_;
    this.tamRect_ = tamRect_;
    this.distanciaConElPersonaje = dist(this.posXpj_, this.posYpj_, this.posXrect, this.posYrect);
    if (this.distanciaConElPersonaje<this.tamRect_) {
      return true
    } else {
      return false
    }
  }
}
