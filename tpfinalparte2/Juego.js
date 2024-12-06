class Juego {
  constructor(cantidadParedes) {
    this.estado = "tutorial"; // tutorial, jugando, ganaste, perdiste, creditos
    this.nivel = 1;
    this.crearPersonaje();
    this.crearSalida(600, 440, 40); //aca podes cambiar la posicion del cuadrado azull
    this.Tutorial1 = new Tuto();
    this.bensons = [];
  }

  siguienteNivel() {
    this.nivel++;

    // Generar múltiples Bensons solo en el nivel 2
    if (this.nivel === 2) {
      this.bensons = []; // Vacía el array por si se reinicia el nivel
      for (let i = 0; i < 3; i++) { // Cambia el número 3 por la cantidad de Bensons deseada
        let x = random(50, width - 50);
        let y = random(50, height - 50);
        this.bensons.push(new Benson(x, y));
      }
    } else {

      this.bensons = [];
      let x = random(50, width - 50);
      let y = random(50, height - 50);
      this.bensons.push(new Benson(x, y));
    }

    this.crearSalida();
  }

  dibujar() {
    if (this.estado === "tutorial") {
      this.crearTutorial();
    } else if (this.estado === "creditos") {
      this.mostrarCreditos();
    } else if (this.estado === "jugando") {
      this.rigby1.dibujar();
      this.mordecai1.dibujar();

      // Dibujar y mover cada Benson
      for (let benson of this.bensons) {
        benson.dibujar();
        benson.Perseguir(this.rigby1.posX, this.rigby1.posY);

        // Verificar colisión con Rigby
        if (benson.Colisionar(this.rigby1.posX, this.rigby1.posY, this.rigby1.tam)) {
          this.estado = "perdiste";
        }
      }

      this.benson1.dibujar();
      this.salida.salidaDelVideojuego();
      this.Perseguir();
      this.Salida();
    } else if (this.estado === "ganaste" || this.estado === "perdiste") {
      textSize(32);
      textAlign(CENTER, CENTER);
      fill(255);
      text(this.estado === "ganaste" ? "¡Ganaste!" : "Perdiste", width / 2, height / 2 - 50); // el signo ? funciona com un if y un else pero de forma corta, se llama expresion ternaria por si te pregunta el profe

      this.mostrarReinicio();
    }
  }

  crearPersonaje() {
    this.rigby1 = new Rigby(200, height / 2, this);
    this.mordecai1 = new Mordecai(); // mordecai definido
    this.benson1 = new Benson();
  }



  crearSalida(posX, posY, tam) {
     if (this.nivel === 2) {
      this.salida = new Salida(100, 100, 40);
    } else if (this.nivel === 1) {
      this.salida = new Salida(600, 440, 40);
    }
  }

  crearTutorial() {
    this.Tutorial1.texto("Tutorial: Usa las flechas para moverte", width / 2, height / 3, 2, 255);

    // boton para comenzar
    this.Tutorial1.BotonDiseño(width / 2, height / 2, 120, 50, 100, "COMENZAR");
    if (this.Tutorial1.BotonPresionado(width / 2, height / 2, 120, 50)) {
      this.estado = "jugando";
    }

    // boton para ir a créditos
    this.Tutorial1.BotonDiseño(width / 2, height / 1.5, 120, 50, 150, "CRÉDITOS");
    if (this.Tutorial1.BotonPresionado(width / 2, height / 1.5, 120, 50)) {
      this.estado = "creditos";
    }
  }

  mostrarCreditos() {
    background(0);
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Créditos", width / 2, height / 4);
    text("Nombre: Bautista Ferron Nicholson", width / 2, height / 2 - 20);


    // boton para volver al inicio, que seria el estado "tutorial"
    this.Tutorial1.BotonDiseño(width / 2, height - 100, 150, 50, 255, "VOLVER");
    if (this.Tutorial1.BotonPresionado(width / 2, height - 100, 150, 50)) {
      this.estado = "tutorial";
    }
  }

  mostrarReinicio() {
    /*cambie la posición del boton de reinicio para q esté un poco más abajo. es el 1.3 pero
     cambia la posicion del boton a donde quieras mientras no se superponga con los demas botones*/
    this.Tutorial1.BotonDiseño(width / 2, height / 1.3, 150, 50, 255, "Reiniciar");
    if (this.Tutorial1.BotonPresionado(width / 2, height / 1.3, 150, 50)) {
      this.reiniciarJuego();
    }
  }



  reiniciarJuego() {
    this.estado = "tutorial";
    this.nivel = 1;
    this.crearPersonaje();
    this.crearSalida(600, 440, 40);
    this.bensons = [];  // Vacía el array de Bensons
    this.siguienteNivel();  // Llama a siguienteNivel para crear el primer Benson
    this.Tutorial1 = new Tuto(); // si necesitas reiniciar la instancia de Tuto
  }


  Perseguir() {
    // Benson persigue a Rigby
    this.benson1.Perseguir(this.rigby1.posX, this.rigby1.posY);

    if (this.nivel === 2) {
      this.benson1.velocidad = 1.3;
    } else {
      this.benson1.velocidad = 0.9;
    }
    if (this.benson1.Colisionar(this.rigby1.posX, this.rigby1.posY, this.rigby1.tam)) {
      this.estado = "perdiste";
     
    }

    // aca Mordecai sigue a Rigby peroo sin colisionar
    this.mordecai1.seguirSinColision(this.rigby1.posX, this.rigby1.posY);
  }

  Salida() {
    if (this.salida.escapar(this.rigby1.posX, this.rigby1.posY, this.rigby1.tam)) {
      if (this.nivel < 2) {
        this.estado = "jugando";
        this.siguienteNivel();
      } else {
        this.estado = "ganaste";
      }
    }
  }
}
