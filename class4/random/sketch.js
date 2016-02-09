function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
}

function draw() {
  var red=random(255);
  var blue=random(255);
  var green=random(255);
  var width=random(10, 500);
  var height=width; 
  background(red, blue, green);

  if (mouseX>=0 && mouseY>=0) {
    ellipse (mouseX, mouseY, width, height);
  }
}