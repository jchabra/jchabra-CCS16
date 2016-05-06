function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(204);
  push();
  translate(width/2, height/2);
  fill(0);
  ellipse(0, -5, 200, 200);
  fill(255);
  var a = atan2(height/2-mouseY, width/2-mouseX);
  rotate(a);
  ellipse(-30, -5, 30, 30);
  pop();
}