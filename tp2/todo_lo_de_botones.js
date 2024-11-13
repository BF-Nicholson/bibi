function botonpainiciar() {
  if (estado === 1) {
    fill(255);
    rect(250, 250, 150, 40);
    fill(0);
    noStroke();
    text('Comenzar Aventura', 295, 275);
  }
}

function botonsiguiente() {
  if (estado >= 2 && estado <= cimagenes) {
    fill (255, 130);
    stroke(50);
    rect( 435, 420, 120, 30);
    fill(0);
    noStroke();
    textSize(16);
    text('Siguiente', 460, 440);
  }
}
function botonreiniciar() {
  if (estado > cimagenes) {
    fill(255);
    stroke(0);
    rect(250, 250, 150, 40);
    fill(20);
    textSize(20);
    noStroke();
    text( 'Reiniciar', 290, 275);
  }
}



//una tecla es un boton, por lo tanto lo pongo en este apartado
function keyPressed() {
   if (key === 'p' || key === 'P') {
    if (!reproduccionAudio) {
     musica.play();
     reproduccionAudio = true;
    }
   }
   if (key === 'o' || key === 'O') {
    if (!reproduccionAudio) {
     musica.stop();
     reproduccionAudio = false;
    }
   }
  
}
