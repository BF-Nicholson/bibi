let widthh = 640;
let heightt = 480;
let cimagenes = 22;
let imagenes = [];
let myfuckingfont;
let estado = 1;
let theboys;
let titulo;
function preload() {

  for (let i= 0; i < cimagenes; i++) {
    imagenes[i] = loadImage("data/"+i+".jpeg")
  }
  myfuckingfont = loadFont('data/OpenSans-Light.ttf');
  theboys = loadImage('data/theboys.png');
  titulo = loadImage('data/titulo.png');
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
  botonperse();
  botonpainiciar();
  botonsiguiente();
}

//function mousePressed() {
//  if ( d<r ) {
//    Imagen[0] = image('0', 0, 0);
//    background(random(0, 255), random(0, 255), random(0, 255));
//  }
//}
