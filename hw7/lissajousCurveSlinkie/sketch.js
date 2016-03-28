var waveLengthOne = 150.0;
var waveLengthTwo = 500.0;
var pointCount = 0;
var angle = 1.0;
var amplitude = 300;
function setup(){
  createCanvas(windowWidth,windowHeight);
}
function draw(){
  if(pointCount > 3000){
    noLoop();
  }
  background(255);
  colorMode(HSB, 100); 
  noFill();
  strokeWeight(1);
  translate(width/2, height/2);
  beginShape();
    for(var i=0; i < pointCount; i++){
    angle = i / waveLengthOne * TWO_PI;
    var y = sin(angle)* amplitude;
    
    angle = i / waveLengthTwo * TWO_PI;
    var x = cos(angle)* amplitude;
    // creating the slinkie
    stroke(x+10, y+10, 66);
    ellipse(x,y,30,80);
    }
  endShape();
  pointCount++;
}

