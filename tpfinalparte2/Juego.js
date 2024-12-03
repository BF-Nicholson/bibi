class Juego {
  constructor(cantidadParedes, miCancion) {
    this.Tutorial1 = new Tuto();

    this.cantidadParedes = cantidadParedes;
    this.crearParedes();
    this.crearPersonaje(200, height/2);
    this.crearSalida(600, 440, 40);
    this.posYbotonRect=300;
    this.mostrarTutorial=true;
  }
  mostrarTuto(mostrarTutorial_) {                           //ESTE METODO CONTROLA LA INSTANCIA DE TUTORIAL POR MEDIO DE UN BOOLEAN
    this.mostrarTutorial=mostrarTutorial_;                  //QUE SE ACTIVA SI APRETO UN BOTON, VERIFICO CON console.log

    if (this.Tutorial1.Boton(width/2, height/2, 80, 40)) {
      console.log("APRETO");
      this.mostrarTutorial=false;
    }
  }
  Salida() {
    if (this.escapar(this.rigby1.posX, this.rigby1.posY, this.salidaDelVideojuego.tamRect )) {
      this.Ganar();
    }
  }
  Ganar() {
    console.log("GANASTEE");
  }
  Perder() {
    console.log("PERDISTE");
  }
  dibujar() {

    if (this.mostrarTutorial) {
      this.crearTutorial(this.mostrarTutorial);
    }
    if (!this.mostrarTutorial) {
      this.rigby1.dibujar();
      this.mordecai1.dibujar();
      this.benson1.dibujar();
      this.salida.salidaDelVideojuego(640, 480, 40);
      this.Fiesta();
      this.Perseguir();

      for (let i=0; i<this.cantidadParedes; i++) {
        this.paredes[i].dibujar();
      }
    }
  }
  crearSalida(posXrect, posYrect, tamRect) {
    this.salida = new Salida(posXrect, posYrect, tamRect);
  }
  crearPersonaje() {                                        //CREO LOS OBJETOS DE LAS CLASES QUE HACEN DE PERSONAJES
    this.rigby1 = new Rigby(200, height/2);
    this.mordecai1 = new mordecai();
    this.benson1 = new benson();
  }

  crearParedes() {
    this.paredes= [];
    for (let i=0; i<this.cantidadParedes; i++) {
      this.paredes[i] = new Pared(i*5, 100);
    }
  }
  crearTutorial(mostrarTutorial) {                                           //TUTORIAL, ACA LLAMO TODOS LOS METODOS DE LA CLASE "TUTO"
    this.Tutorial1.texto(tutorial, 100, 100, 2, 255);                        //METODOS LLAMADOS: DISEÑO DE BOTON, CTRL DE TUTORIAL ACT, TXT TUTORIAL 
    this.Tutorial1.BotonDiseño(width/2, height/2, 120, 50, 100, 'COMENZAR');
    this.Tutorial1.tutorialActivo(mostrarTutorial);
  }

  teclaPresionada(key) {
    this.rigby1.teclaPresionada(key);
  }
  Perseguir() {                                                  //ACA ARMO LA PERSECUCION DE BENSON, SI TE AGARRA PERDÉS

    this.benson1.Perseguir(this.rigby1.posX, this.rigby1.posY);

    if (this.benson1.Colisionar(this.rigby1.posX, this.rigby1.posY, this.rigby1.tam)) {
      this.Perder();
    }
  }
  Fiesta() {                                                    //ACA HAGO QUE MORDECAI SIGA A RIGBY PONIENDOSE A SU LADO
    this.mordecai1.Fiesta(this.rigby1.posX, this.rigby1.posY);
  }
  Musica(key, miCancion) {
    if ( key === 'p' || key === 'P' ) {
      miCancion.play();
      SoundTrackSuena = true;
    } else if ( key === 's' || key === 'S' ) {
      miCancion.stop();
      SoundTrackSuena = false;
    }
  }
  Loop(miCancion) {
    miCancion.loop();
  }
}
