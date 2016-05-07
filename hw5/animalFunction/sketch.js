var xPosition = 0;
var yPosition = 0;

function setup() {
  createCanvas(windowWidth,windowHeight); 
}

function draw(){
  background(204);
  beagle();
  talkingDog("Woof! Woof! I am hungry!");
}

function beagle() {
  push();
  translate(width/2, height/1.5);

  //Head
  noStroke();
  fill("#a36d28");
  //top of head
  ellipse(0, -135, 205, 222);

  //middle part of mouth
  ellipse(0, -65,145,130);

  // Left Ear
  noStroke();
  fill("#2e2726");
  beginShape();
  vertex(150, -98);
  bezierVertex(100, -180, 130, -215, 33, -240);
  bezierVertex(170, -170, 0, -15, 90, 10);
  endShape();

  beginShape();
  vertex(149, -100);
  bezierVertex(160, -70, 190, -40, 90, 10);
  endShape();

  // Right Ear
  beginShape();
  vertex(-150, -98);
  bezierVertex(-100, -180, -130, -215, -33, -240);
  bezierVertex(-170, -170, 0, 15, -90, 10);
  endShape();

  beginShape();
  vertex(-149, -100);
  bezierVertex(-160, -70, -190, -40, -90, 10);
  endShape();

  //Shape of Mouth
  stroke(255);
  strokeWeight(30);//body width
  line(0,-100,0,-165);//body
  noStroke();
  fill("#ffffff");
  triangle(-65,-52, 65,-52, 0,-165);
  ellipse(-27.5, -45,75,85);//left part of mouth
  ellipse(27.5,-45,75,85);//right part of mouth

  // Eyes
  //~White Part of the Eye
  noStroke();
  fill("#ffffff");
  ellipse(-50,-165,40,55);//left eye
  ellipse(50,-165,40,55);//right eye

  //~Brown Part of the Eye
  fill("#352e2c");
  ellipse(-50,-154,34,34);//left eye
  ellipse(50,-154,34,34);//right eye

  // ~White speck
  fill("#ffffff");
  ellipse(-57,-150,6,6);//left eye
  ellipse(43,-150,6,6);//right eye
  
  // Testing Eye Movement
  // eyeMovement();

  //Nose
  fill("#352e2c");
  ellipse(0,-65,65,35);//top of nose
  arc(0,-65,66,56,0,PI);//bottom of nose
  
  pop();
}

function talkingDog(greeting) {
  frameRate(2);
  xRandom = random(xPosition, width);
  yRandom = random(yPosition, height);
  textSize(20);
  text(greeting, xRandom, yRandom, width, height);
}

// function eyeMovement() {
//   fill("#ffffff");
//   var a = atan2(height/2-mouseY, width/2-mouseX);
//   push();
//   translate(-57, -150);
//   // fill(0);
//   // ellipse(0, -5, 200, 200);
//   // fill(255);
//   rotate(a);
//   ellipse(-5,3,6,6);//left eye
//   // ellipse(-57,-150,6,6);//left eye
//   // ellipse(-30, -5, 30, 30);
//   pop();
  
//   push();
//   translate(43, -150);
//   ellipse(0,0,6,6);//right eye
//   pop();
// }

