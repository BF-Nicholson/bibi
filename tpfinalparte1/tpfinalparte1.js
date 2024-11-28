//https://youtu.be/BEgGQ4p7yb8
//Bautista Ferron Nicholson, Com 2, Legajo 119029/8


let widthh = 640;
let heightt = 480;
let cimagenes = 22;
let imagenes = [];
let myfuckingfont;
let estado = 1;
let dialogos = [];
let reproduccionAudio = false;
let musica;
let decisiones = [];

function preload() {

  for (let i= 0; i < cimagenes; i++) {
    imagenes[i] = loadImage("data/"+i+".jpeg")
  }
  myfuckingfont = loadFont('data/OpenSans-Light.ttf');
  dialogos = loadStrings('data/dialogos.txt');
  soundFormats('mp3');
  musica = loadSound('data/cancion1.mp3');
  decisiones[5] = ['Seguir Jugando', 'Volver\naltrabajo']
}

function setup() {
  background(0);
  createCanvas(640, 480);
  print(imagenes);
  textFont(myfuckingfont);
  musica.loop();
  
}


function draw() {
  background(0);
  pantalladeinicio();
  pantallas();
  botonperse();
  botonesreinicio();
  botonpainiciar();
  botonsiguiente();
  botoneleccion();
  elecciontriple(),
  dialogo(2, 0, 255, 21, LEFT); 
  
  //botonglobal(200, 0, width/2, height/2, 50, 50, 'hola', 20);
 
  print("mouseX:"+mouseX);
  print("mouseY:"+mouseY);
  print("estado:"+estado); //print de estados para trabajar mejor
}
