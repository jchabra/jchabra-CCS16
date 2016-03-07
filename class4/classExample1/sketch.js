// Analgous color pallette
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  for(var i=0; i<7; i++) {
    fill(i*50, 100, 100);
    rect(i* 100+50, height/2, 50, 50);
  }
}