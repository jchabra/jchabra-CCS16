function setup() {
  createCanvas(800, 500);
}

function draw() {
  background("#000");
  if(mouseX > 400) {
    ellipse(120, 110, 300, 300);
  } else if(mouseY < 300) {
    rect(300, 200, 200, 200);
  } else {
    background("#000");
  }
}