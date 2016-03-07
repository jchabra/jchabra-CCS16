var myGeometry = ["TheArrow", 138, 131, "#234887"];

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255);
  fill(myGeometry[myGeometry.length-1]);
  quad(myGeometry[1], 
  myGeometry[2], 
  86, 
  20, 
  69, 
  63, 
  30, 
  76);
  textAlign(CENTER);
  text("the geometry's name is: " + myGeometry[0],
  width/2, 
  height-100);

}
