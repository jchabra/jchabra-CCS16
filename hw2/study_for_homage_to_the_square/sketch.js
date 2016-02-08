// Study for Homage to the Square: Still Remembered
//https://www.google.com/culturalinstitute/u/0/asset-viewer/study-for-homage-to-the-square-still-remembered/GgFKjB6-mBLFzQ?projectId=art-project

function setup() {
  createCanvas(500,500);
}

function draw() {
  background("#d7c8a2");
  noStroke();
  var width = 480;
  var height = 480;
  // Teal
  fill("#406b6c")
  rect(10,10,width,height);
  // Yellow
  fill("#f9db49");
  rect(60,80,(width-100),(height-90));
  // Mustard
  fill("#dab649");
  rect(110,160,(width-200),(height-190));
  // Brown
  fill("#714f16");
  rect(160,240,(width-300),(height-290));
}