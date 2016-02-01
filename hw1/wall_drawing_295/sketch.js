// Wall Drawing #295 (1976)
// Six white geometric figures (outlines) superimposed on a black wall.
function setup() {
  createCanvas(800,500);
}

function draw() {
  background("#000");
  stroke("#fff");
  noFill();
  strokeWeight(3);
  quad(758, 55, 300, 14, 292, 66, 640, 170);
  triangle(647, 154, 392, 200, 292, 156);
  quad(20,240,220,240, 110, 480, 651, 107);
  rect(550,250,220,220);
  quad(600, 20, 20, 10, 30, 400, 251, 107);
  quad(390, 470, 300, 270, 600, 180, 780, 230);
}