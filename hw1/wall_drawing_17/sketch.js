// Wall Drawing #17 (1969)
// Four-part drawing with a different line direction in each part.

var rectangleWidth = 175;
var rectangleHeight = 470;

function setup() {
  createCanvas(800,500);
}

function draw() {
  background(255);  
  noFill();
  strokeWeight("5");
  
  var firstY1 = 15;
  var firstY2 = 485;
  // first part
  rect(15,firstY1,rectangleWidth,rectangleHeight);
  line(45,firstY1,45,firstY2);
  line(65,firstY1,65,firstY2);
  line(85,firstY1,85,firstY2);
  line(105,firstY1,105,firstY2);
  line(125,firstY1,125,firstY2);
  line(145,firstY1,145,firstY2);
  line(165,firstY1,165,firstY2);
  
  var secondX1 = 210;
  var secondX2 = 385;
  var secondY1 = 15;
  var secondY2 = 485;
  // second part
  rect(secondX1,secondY1,rectangleWidth,rectangleHeight);
  line(secondX1,secondY1,secondX2,secondY2);
  line(240,secondY1,secondX2,400);
  line(270,secondY1,secondX2,315);
  line(300,secondY1,secondX2,230);
  line(330,secondY1,secondX2,145);
  line(secondX1,90,355,secondY2);
  line(secondX1,165,325,secondY2);
  line(secondX1,240,295,secondY2);
  line(secondX1,315,265,secondY2);
  
  var thirdX1 = 580;
  var thirdX2 = 405;
  var thirdY1 = 15;
  var thridY2 = 485;
  // third part
  rect(thirdX2,thirdY1,rectangleWidth,rectangleHeight);
  line(thirdX1,thirdY1,thirdX2,thridY2);
  line(550,thirdY1,thirdX2,400);
  line(520,thirdY1,thirdX2,315);
  line(490,thirdY1,thirdX2,230);
  line(460,thirdY1,thirdX2,145);
  line(thirdX1,90,435,thridY2);
  line(thirdX1,165,465,thridY2);
  line(thirdX1,245,495,thridY2);
  line(thirdX1,315,525,thridY2);
  
  var fourthX1 = 600;
  var fourthX2 = 775;
  // fourth part
  rect(fourthX1,15,rectangleWidth,rectangleHeight);
  line(fourthX1,45,fourthX2,45);
  line(fourthX1,75,fourthX2,75);
  line(fourthX1,105,fourthX2,105);
  line(fourthX1,135,fourthX2,135);
  line(fourthX1,165,fourthX2,165);
  line(fourthX1,195,fourthX2,195);
  line(fourthX1,225,fourthX2,225);
  line(fourthX1,255,fourthX2,255);
  line(fourthX1,285,fourthX2,285);
  line(fourthX1,315,fourthX2,315);
  line(fourthX1,345,fourthX2,345);
  line(fourthX1,375,fourthX2,375);
  line(fourthX1,405,fourthX2,405);
  line(fourthX1,435,fourthX2,435);
  line(fourthX1,465,fourthX2,465);
}