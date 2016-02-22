//Moire Sketch 3
// By: Jasmine Chabra 

function setup() {
  createCanvas(500,500);
  background(255);
  stroke(202, 155, 30, 50);
  noFill();
}

function draw() {
  for(var i=10; i<500; i+=10){
    for(var j=90; j<500; j+=150){
      beginShape(TRIANGLES);
      vertex(i, 480);
      vertex(i, 10);
      vertex(j, 240);
      endShape();
    }
  }
}