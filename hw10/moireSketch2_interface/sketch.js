// Moire Sketch 2 with slider
// By: Jasmine Chabra

var theta = 0.0;
// var rotationSpeed = 0.001;
var rotationSpeed = 5;

function setup() {
  createCanvas(500,500);
  background(255);
  slider = createSlider(1, 100, rotationSpeed);
  slider.position(10, 510);
  slider.style('width', '480px');
  noFill();
}

function draw() {
  var val = slider.value();
  var red=random(255);
  var blue=random(255);
  var green=random(255);

  frameRate(val);
  
  // stationary
  push();
  // translate(width/2, height/2);
  stroke(96,149,148,50);
  // stroke(red,blue,148,50);
  for (var i=0; i<500; i+=5){
    beginShape(LINES);
    vertex(500, i+10);
    vertex(0, i);
    vertex(0, i+500);
    vertex(500, i+500);
    endShape();
  }
  pop();

  // rotating
  push();
  translate(width/2, height/2);
  rotate(theta);
  stroke(45,43,100,50);
  // strokeWeight(10);
  // stroke(red,blue,green,50);
  for (var i=0; i<500; i+=5){ 
    beginShape(LINES);
    vertex(500, i);
    vertex(0, i);
    vertex(0, i+55);
    vertex(500, i+55);
    endShape();
  }
  pop();
  theta += val/100;
}