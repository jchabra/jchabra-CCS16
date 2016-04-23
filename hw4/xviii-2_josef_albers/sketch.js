function setup() {
  createCanvas(500,500);
  noStroke();
}

function draw() {
  background(0);
  for(var y= 0; y <= height; y+=35) {
    for(var x=0; x<=width; x+=35) {
      fill(255, 140);
      ellipse(x,y,35,35);
    }
  }
}