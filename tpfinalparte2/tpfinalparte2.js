let posX, posY;
let rigbysprite;
let mordecaisprite;
let bensonsprite;

let objJuego;

function setup() {
  createCanvas(640, 480);
  background(100);

  rigbysprite = loadImage('data/rigbysprite.png');
  mordecaisprite = loadImage('data/mordecaisprite.png');
  bensonsprite = loadImage('data/bensonsprite.png');

objJuego = new juego();
}


function draw() {
  objJuego.dibujar();
}
