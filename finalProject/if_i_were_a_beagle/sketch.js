var xPosition = 0;
var yPosition = 0;

function preload(){
  img = loadImage('images/beagle_body.png');
}
function setup() {
  createCanvas(windowWidth,windowHeight); 
  bg = loadImage("images/background_image.png");
  bone = loadImage("images/dog_bone.png");
}

function draw(){
  background("#e8e6e6");
  image(bg,0,0,width);
  beagle();
  dogBone();
  
}

function beagle() {
  push();
  translate(width/2, 400);
  image(img,-150,-75, 345,265);

  //Head
  noStroke();
  fill("#a36d28");
  //top of head
  ellipse(0, -135, 205, 222);

  //middle part of mouth
  ellipse(0, -65,145,130);
  
  // tongue
  noStroke();
  fill("#cb736d");
  ellipse(0, -45,65,130);
  strokeWeight(2);
  stroke("#2e2726");
  line(0,-15, 0, 5);

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
  // ellipse(-50,-165,40,55);//left eye
  // ellipse(50,-165,40,55);//right eye
  ellipse(-50,-165,50,50);//left eye
  ellipse(50,-165,50,50);//right eye

  eyeMovement();

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

function eyeMovement() {  
  var a = atan2(height/2-mouseY, width/2-mouseX);
  // LEFT EYE
  push();
  translate(-50, -163);
  rotate(a);
  fill("#352e2c");
  ellipse(-10,1,33,33);//left eye
  pop();
  
  // RIGHT EYE
  push();
  translate(49, -163);
  rotate(a);
  fill("#352e2c");
  ellipse(-10,1,33,33);//left eye
  pop();
}

function dogBone() {
  push();
  translate(mouseX,mouseY);
  image(bone,0,0);
  pop();
}
