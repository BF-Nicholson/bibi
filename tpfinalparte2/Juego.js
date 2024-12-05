class Juego {
  constructor(cantidadParedes) {
    this.estado = "tutorial"; // tutorial, jugando, ganaste, perdiste
    this.cantidadParedes = cantidadParedes;
    this.crearParedes();
    this.crearPersonaje();
    this.crearSalida(600, 440, 40);
    this.Tutorial1 = new Tuto();
  }

  dibujar() {
    if (this.estado === "tutorial") {
      this.crearTutorial();
    } else if (this.estado === "jugando") {
      this.rigby1.dibujar();
      this.mordecai1.dibujar();
      this.benson1.dibujar();
      this.salida.salidaDelVideojuego();
      this.Perseguir();
      this.Salida();

      for (let pared of this.paredes) {
        pared.dibujar();
      }
    } else if (this.estado === "ganaste" || this.estado === "perdiste") {
      textSize(32);
      textAlign(CENTER, CENTER);
      fill(255);
      text(this.estado === "ganaste" ? "¡Ganaste!" : "Perdiste", width / 2, height / 2 - 50); // el signo fe pregunta es como un if

      this.mostrarReinicio();
    }
  }

  crearPersonaje() {
    this.rigby1 = new Rigby(200, height / 2);
    this.mordecai1 = new Mordecai(); // Asegúrate de que Mordecai esté definido
    this.benson1 = new Benson();
  }

  crearParedes() {
    this.paredes = [];
    for (let i = 0; i < this.cantidadParedes; i++) {
      this.paredes.push(new Pared(i * 50, 100));
    }
  }

  crearSalida(posX, posY, tam) {
    this.salida = new Salida(posX, posY, tam);
  }

  crearTutorial() {
    this.Tutorial1.texto("Tutorial: Usa las flechas para moverte", width / 2, height / 3, 2, 255);
    this.Tutorial1.BotonDiseño(width / 2, height / 2, 120, 50, 100, "COMENZAR");
    if (this.Tutorial1.BotonPresionado(width / 2, height / 2, 120, 50)) {
      this.estado = "jugando";
    }
  }

  mostrarReinicio() {
    this.Tutorial1.BotonDiseño(width / 2, height / 2, 150, 50, 255, "Reiniciar");
    if (this.Tutorial1.BotonPresionado(width / 2, height / 2, 150, 50)) {
      this.reiniciarJuego();
    }
  }

  reiniciarJuego() {
    this.estado = "jugando";
    this.crearPersonaje();
    this.crearParedes();
  }

  Perseguir() {
    this.benson1.Perseguir(this.rigby1.posX, this.rigby1.posY);
    if (this.benson1.Colisionar(this.rigby1.posX, this.rigby1.posY, this.rigby1.tam)) {
      this.estado = "perdiste";
    }
  }

  Salida() {
    if (this.salida.escapar(this.rigby1.posX, this.rigby1.posY, this.rigby1.tam)) {
      this.estado = "ganaste";
    }
  }
}
