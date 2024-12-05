let objJuego;

function preload() {
  rigbysprite = loadImage("data/rigbysprite.png");
  mordecaisprite = loadImage("data/mordecaisprite.png");
  bensonsprite = loadImage("data/bensonsprite.png");
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(10); // Inicializa el objeto Juego
}

function draw() {
  background(0);
  objJuego.dibujar(); // Dibuja el estado actual del juego
}

function keyPressed() {
  if (objJuego.estado === "jugando") {
    objJuego.rigby1.teclaPresionada(); // Permite mover a Rigby
  }
}

function mousePressed() {
  if (objJuego.estado === "tutorial") {
    // El tutorial ya verifica los clics en los botones
    objJuego.crearTutorial();
  }
  if (objJuego.estado === "ganaste" || objJuego.estado === "perdiste") {
    objJuego.mostrarReinicio(); // Muestra el botón para reiniciar el juego
  }
}
