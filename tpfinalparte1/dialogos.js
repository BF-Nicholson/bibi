function dialogo(sW, s, f, tS, tA, e, cI, dialogo){
  
  
  
  strokeWeight(sW);
  stroke(s);
  fill(f);
  textSize(tS);
  textAlign(tA);
  
  if (e >= 2 || e <= cI) {
   text(dialogo[e - 2], width/8, 350); 
  }
}
