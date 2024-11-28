function dialogo(sW, s, f, tS, tA){
  strokeWeight(sW);
  stroke(s);
  fill(f);
  textSize(tS);
  textAlign(tA);
  
  if (estado >= 2 || estado <= cimagenes) {
   text(dialogos[estado - 2], width/8, 350); 
  }
}
