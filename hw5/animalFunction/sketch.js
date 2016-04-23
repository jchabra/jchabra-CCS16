function setup() {
  createCanvas(500,500); 
}

function draw(){
  background(204);
// 	owl();
	beagle();
}
function owl(){
  push();
  translate(width/2,height/2);
  stroke(0);
  strokeWeight(70);
	line(0,-35,0,-65);//body
	noStroke();
	fill(255);
	ellipse(-17.5, -65,35,35);//left eye dome
	ellipse(17.5,-65,35,35);//right eye dome
	arc(0,-65,70,70,0,PI);//chin
	fill(0);
	ellipse(-14,-65,8,8);//left eye
	ellipse(14,-65,8,8);//right eye
	quad(0,-58,4,-51,0,-44,-4,-51);//beak
	pop();
}

function beagle() {
  push();
  translate(width/2,300);
  
  //Head
  noStroke();
  fill("#c8602a");
  ellipse(0, -145,205,200);//top of head
  // ellipse(-40, -65,105,55);//left part of mouth
  ellipse(0, -65,145,130);//middle part of mouth
// 	ellipse(40,-65,105,55);//right part of mouth
	stroke("#c8602a");
	strokeWeight(30);//body width
	line(0,-20,-65,-85);//body
  
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


  //Eyes
  noStroke();
	fill("#352e2c");
  ellipse(-50,-165,40,40);//left eye
	ellipse(50,-165,40,40);//right eye
	
  //Shape of Mouth
  stroke(255);
	strokeWeight(30);//body width
	line(0,-100,0,-165);//body
	noStroke();
  fill("#ffffff");
  triangle(-65,-52, 65,-52, 0,-165);
	ellipse(-27.5, -45,75,85);//left part of mouth
	ellipse(27.5,-45,75,85);//right part of mouth
	
	
  //Nose
	fill("#352e2c");
	ellipse(0,-65,65,35);//top of nose
	arc(0,-65,66,56,0,PI);//bottom of nose


	pop();
}