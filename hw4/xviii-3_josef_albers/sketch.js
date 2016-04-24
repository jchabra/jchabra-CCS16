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

// shape4 - blue box
  noStroke();
  fill("#2a709a");
  quad(200,200,400,213,400,385,180,365);
  fill("#7e1f17");
  // quad(215,120,320,127,310,182,215,184);
  
}