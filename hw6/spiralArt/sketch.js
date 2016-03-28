var angle = 0.0;
function setup(){
  // createCanvas(windowWidth, windowHeight);
  createCanvas(500, 500);
}
function draw() {
  noStroke();
  // random colors for fill
  var red=random(255);
  var blue=random(255);
  var green=random(255);
  // the design will start in the middle of the canvas
  translate(width/2,height/2);
  angle += 0.1;
  rotate(angle);
  // speed of the movement of the design
  frameRate(30);
  for(var i =0; i < 8; i++){
    push();
    rotate(TWO_PI * i / 8);
    fill(red, blue, green,100);
    // using circles
    ellipse(frameCount % (width/2),0,5,5);
    pop();
  }
}