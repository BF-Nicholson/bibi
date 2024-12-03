class Tuto {
  constructor(posXtexto, posYtexto) {
    this.posXtexto = posXtexto;
    this.posYtexto = posYtexto;
  }

  texto(texto, x, y, strokeAncho, relleno) {
    push();
    strokeWeight(strokeAncho);
    fill(relleno);
    text(texto, x, y);
    pop();
  }

  tutorialActivo(variable) {
    if (mousePressed && variable === true) {
      variable = false;
    }
  }

  Boton(posXboton, posYboton, anchoBoton, altoBoton) {
    this.posXboton = posXboton;
    this.posYboton = posYboton;
    this.anchoBoton = anchoBoton;
    this.altoBoton = altoBoton;

    return mouseX > posXboton && mouseX <= posXboton+anchoBoton && mouseY > posYboton && mouseY <= posYboton+altoBoton;
  }
  BotonDiseño(posXbotonRect, posYbotonRect, anchoDelRect, altoDelRect, relleno, comenzar ) {
    push();
    rectMode(CENTER);
    stroke(2);
    fill(relleno);
    rect(posXbotonRect, posYbotonRect, anchoDelRect, altoDelRect);
    textSize(20);
    text(comenzar, width/2-50, height/2);
    pop();
  }
}
