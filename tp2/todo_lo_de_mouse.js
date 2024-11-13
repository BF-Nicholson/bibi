function botonperse(x, y, ancho, alto) {
  return mouseX > x && mouseX < x+ancho && mouseY > y && mouseY < y+alto;
}



function mousePressed() {
  if (estado === 1 && botonperse(250,250,150,40)){
   estado++; 
  } else if (estado > cimagenes && botonperse (250,250,150,40)){
    estado = 1;
  } else if (botonsiguiente && botonperse (435, 420, 120, 30)){
   estado++;
  }
}
