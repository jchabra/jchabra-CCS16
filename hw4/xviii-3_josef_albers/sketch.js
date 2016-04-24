function setup() {
  createCanvas(400,600);
}

function draw() {
  background(0);
  noStroke();
// shape1 - yellow box 
  fill("#ce9d18");
  quad(0,0,200,0,220,260,0,280);
  //~inside yellow/pink box 
  stroke("#bc3a5a");
  strokeWeight(15);
  fill("#ce9d18");
  quad(50,80,150,70,160,225,47,240);
  
// shape2 - green box
  noStroke();
  fill("#23483a");
  quad(200,0,400,0,400,88,200,95);
  fill("#802218");
  quad(230,50,400,52,400,62,230,65);
  
// shape3 - orange box
  noStroke();
  fill("#af3932");
  quad(180,95,400,88,400,215,180,200);
  fill("#2b6f93");
  quad(215,120,320,127,310,182,215,184);

// shape4 - light blue box
  noStroke();
  fill("#8b231b");
  rect(0,400,300,150);
  
  fill("#5d97c4");
  ellipse(100,400, 300, 120);
  
  fill("#5d97c4");
  ellipse(100,560, 350, 160);
  
// shape5 - brown box
  noStroke();
  fill("#592918");
  quad(0,280,400,213,400,385,0,366);
  stroke("#163d58");
  strokeWeight(7);
  fill("#592918");
  quad(50,300,150,295,150,335,60,340);
  

// shape6 - blue box
  noStroke();
  fill("#2a709a");
  quad(200,200,400,213,400,405,180,385);
  
  //~red leaf shape
  fill("#7e1f17");
  beginShape();
  vertex(300, 280);
  bezierVertex(340, 240, 380, 225, 400, 265);
  endShape();
  
  stroke("#7e1f17");
  strokeWeight(2);
  triangle(300, 280, 400, 265, 400, 284);
  
  noStroke();
  beginShape();
  vertex(300, 280);
  bezierVertex(338, 300, 380, 325, 400, 284);
  endShape();
  
  // shape7 - coral box
  noStroke();
  fill("#b94c47");
  quad(220,388,400,404,400,600,180,600);
  stroke("#7da264");
  strokeWeight(7);
  fill("#b94c47");
  quad(250,435,310,430,310,475,250,480);
  
  // #7da264

  
  
}