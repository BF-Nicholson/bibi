let rigbysprite;
let mordecaisprite;
let bensonsprite;
let objJuego;
let miCancion;
let SoundTrackSuena = false;

function preLoad() {
  soundFormats('.mp3');
  miCancion = loadSound('data/cancion1.mp3');
  
}
function setup() {
  createCanvas(640, 480);
  background(170);

  rigbysprite = loadImage('data/rigbysprite.png');
  mordecaisprite = loadImage('data/mordecaisprite.png');
  bensonsprite = loadImage('data/bensonsprite.png');

  objJuego = new Juego(8);
  objJuego.Loop(miCancion);
  
  
}


function draw() {
  background(150);
  objJuego.dibujar();
  objJuego.Perseguir();
  objJuego.Fiesta();

  //print("mouseX:"+mouseX);
  //print("mouseY:"+mouseY);
  print("keycODE:"+key);
}

function keyPressed() {
  objJuego.teclaPresionada(key);
  objJuego.Musica(key, miCancion);
  
}
