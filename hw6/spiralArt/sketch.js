var angle = 0.0;
function setup(){
  // createCanvas(windowWidth, windowHeight);
  createCanvas(500, 500);
}
function draw() {
  noStroke();
  var red=random(255);
  var blue=random(255);
  var green=random(255);
  translate(width/2,height/2);
  angle += 0.1;
  rotate(angle);
  frameRate(30);
  for(var i =0; i < 8; i++){
    push();
    rotate(TWO_PI * i / 8);
    fill(red, blue, green,50);
    ellipse(frameCount % (width/2),0,5,5);
    pop();
  }
}