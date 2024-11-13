function dialogo(){
  strokeWeight(2);
  fill(255);
  textSize(14);
  
  if (estado >= 2 && estado <= 22) {
   text(dialogos[estado - 2], 120, 380); 
  }
}
