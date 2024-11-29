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

  objJuego = new Juego(4);
}


function draw() {
  background(150);
  objJuego.dibujar();

  //print("mouseX:"+mouseX);
  //print("mouseY:"+mouseY);
  print("keycODE:"+key);
}

function keyPressed(){
objJuego.teclaPresionada(key);
}
