let objJuego;
let fondoDelJuego;
//falta variable global para el sonido

function preload() {
  rigbysprite = loadImage("data/rigbysprite.png");
  mordecaisprite = loadImage("data/mordecaisprite.png");
  bensonsprite = loadImage("data/bensonsprite.png");
  fondoDelJuego = loadImage("data/fondoDelJuego.jpg");
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(0); // inicializa el objeto Juego, si queres cambia el nombre a Juego en vez de objJuego a
}

function draw() {
  background(0);
  image(fondoDelJuego, 0, 0, width, height);
  textSize(24);
  fill(255);
  textAlign(RIGHT);
  text("Nivel: " +objJuego.nivel, width -20, 40);

  objJuego.dibujar(); // dibuja el estado actual del juego,
}

function keyPressed() {
  if (objJuego.estado === "jugando") {
    objJuego.rigby1.teclaPresionada(); // permite mover a Rigby
  }
}

function mousePressed() {
  if (objJuego.estado === "tutorial") {
    // verifica los clics en los botones
    objJuego.crearTutorial();
  }
  if (objJuego.estado === "ganaste" || objJuego.estado === "perdiste") {
    // cuando estas en la pantalla de fin de juego, se muestra el botón de reiniciar
    objJuego.mostrarReinicio();
  }
}
