// Moire Sketch 1
// By: Jasmine Chabra

function setup() {
  createCanvas(500,500);
  background(255);
  stroke(148,99,146,50);
  noFill();
}

function draw() {
  for (var i=0; i<500; i+=5){
    beginShape(TRIANGLE_FAN);
    vertex(257.5, 250);
    vertex(457.5, i);
    vertex(292, i);
    vertex(57.5, i);
    vertex(222, i);
    vertex(57.5, i);
    endShape();
  }
}