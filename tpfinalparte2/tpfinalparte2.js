let objJuego;
let fondoDelJuego;
let miCancion;
let reproduccionAudio = false;


function preload() {
  rigbysprite = loadImage("data/rigbysprite.png");
  mordecaisprite = loadImage("data/mordecaisprite.png");
  bensonsprite = loadImage("data/bensonsprite.png");
  fondoDelJuego = loadImage("data/fondoDelJuego.jpg");
  soundFormats = ('mp3');
  miCancion = loadSound("data/cancion1.mp3");
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(0); 
  miCancion.loop();
}

function draw() {
  background(0);
  image(fondoDelJuego, 0, 0, width, height);
  textSize(24);
  fill(255);
  textAlign(RIGHT);
  text("Nivel: " +objJuego.nivel, width -20, 40);

  objJuego.dibujar(); 
}

function keyPressed() {
  if (objJuego.estado === "jugando") {
    objJuego.rigby1.teclaPresionada(); 

    if (key === 'p' || key === 'P') {
      if (!reproduccionAudio) {
        miCancion.play();
        reproduccionAudio = true;
      }
    }
    if (key === 'o' || key === 'O') {
      miCancion.stop();
      reproduccionAudio = false;
    }
  }
}


function mousePressed() {
  if (objJuego.estado === "tutorial") {
    objJuego.crearTutorial();
  }
  if (objJuego.estado === "ganaste" || objJuego.estado === "perdiste") {
    objJuego.mostrarReinicio();
  }
}
