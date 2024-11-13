//Bautista Ferron Nicholson, Com 2, Legajo 119029/8
let widthh = 640;
let heightt = 480;
let cimagenes = 22;
let imagenes = [];
let myfuckingfont;
let estado = 1;
let theboys;
let titulo;
let dialogos = [];
let reproduccionAudio = false;
let musica;
let soundFormats;
function preload() {

  for (let i= 0; i < cimagenes; i++) {
    imagenes[i] = loadImage("data/"+i+".jpeg")
  }
  myfuckingfont = loadFont('data/OpenSans-Light.ttf');
  theboys = loadImage('data/theboys.png');
  titulo = loadImage('data/titulo.png');
  dialogos = loadStrings('data/dialogos.txt');
  soundFormats('mp3');
  musica = loadSound('data/cancion1.mp3');
}

function setup() {
  background(0);
  createCanvas(640, 480);
  print(imagenes);
  textFont(myfuckingfont);
  
}


function draw() {
  background(0);
  pantalladeinicio();
  pantallas();
  botonperse();
  botonreiniciar();
  botonpainiciar();
  botonsiguiente();
  dialogo(); //tira error no se por que
}
