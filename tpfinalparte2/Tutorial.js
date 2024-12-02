class Tuto {
  constructor(posXtexto, posYtexto) {
    this.posXtexto = posXtexto;
    this.posYtexto = posYtexto;
  }

  texto(text, x, y, stroke, fill) {
    stroke(stroke);
    fill(fill);
    text(text, x, y);
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

    return mouseX > posXboton && mouseX <= posXboton+anchoBoton && mouseY > posYboton && mouseY <= posXboton+altoBoton;
  }
  BotonDiseño(posXbotonRect,posYbotonRect, anchoDelRect, altoDelRect, fill ){
    stroke(2);
    fill(fill);
    rect(posXbotonRect, posYbotonRect, anchoDelRect, altoDelRect);
  }
}
