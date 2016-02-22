// Moire Sketch 2
// By: Jasmine Chabra

function setup() {
  createCanvas(500,500);
  background(255);
  noFill();
}

function draw() {
  stroke(45,43,100,50);
  for (var i=0; i<500; i+=5){
    beginShape(LINES);
    vertex(500, i);
    vertex(0, i);
    vertex(0, i+55);
    vertex(500, i+55);
    endShape();
  }
  stroke(96,149,148,50);
  for (var i=0; i<500; i+=5){
    beginShape(LINES);
    vertex(500, i+10);
    vertex(0, i);
    vertex(0, i+500);
    vertex(500, i+500);
    endShape();
  }
}