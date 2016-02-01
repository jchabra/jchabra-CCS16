// Wall Drawing #17 (1969)
// Four-part drawing with a different line direction in each part.
function setup() {
  createCanvas(800,500);
}

function draw() {
  background(255);
  noFill();
  strokeWeight("5");
  
  // first part
  rect(15,15,175,470);
  line(45,15,45,485);
  line(65,15,65,485);
  line(85,15,85,485);
  line(105,15,105,485);
  line(125,15,125,485);
  line(145,15,145,485);
  line(165,15,165,485);
  
  // second part
  rect(210,15,175,470);
  line(210,15,385,485);
  line(240,15,385,400);
  line(270,15,385,315);
  line(300,15,385,230);
  line(330,15,385,145);
  line(210,90,355,485);
  line(210,165,325,485);
  line(210,240,295,485);
  line(210,315,265,485);
  
  // third part
  rect(405,15,175,470);
  line(580,15,405,485);
  line(550,15,405,400);
  line(520,15,405,315);
  line(490,15,405,230);
  line(460,15,405,145);
  line(580,90,435,485);
  line(580,165,465,485);
  line(580,245,495,485);
  line(580,315,525,485);
  
  // fourth part
  rect(600,15,175,470);
  line(600,45,775,45);
  line(600,75,775,75);
  line(600,105,775,105);
  line(600,135,775,135);
  line(600,165,775,165);
  line(600,195,775,195);
  line(600,225,775,225);
  line(600,255,775,255);
  line(600,285,775,285);
  line(600,315,775,315);
  line(600,345,775,345);
  line(600,375,775,375);
  line(600,405,775,405);
  line(600,435,775,435);
  line(600,465,775,465);
}