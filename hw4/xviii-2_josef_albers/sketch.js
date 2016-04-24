function setup() {
  createCanvas(500,500);
  noStroke();
}

function draw() {
  background(0);
  // background colors
  fill("#488e74");
  rect(0,0,width,150);
  fill("#8cc8ac");
  rect(0,150,width,110);
  fill("#a3947f");
  rect(0,260,width,100);
  fill("#26372d");
  rect(0,360,width,140);
  
  // setting up lerpcolor for circles
  colorMode(RGB);
  color1 = color("#2c332c");
  color4 = color("#658057");
  color2 = lerpColor(color1, color4, .33);
  color3 = lerpColor(color1, color4, .66);
  myColors = [color1, color2, color3, color4];
  
  frameRate(1);
  for(var y= 0; y <= height; y+=35) {
    for(var x=0; x<=width; x+=35) {
      var randColor = myColors[floor(random() * myColors.length)];
      fill(randColor);
      ellipse(x,y,35,35);
    }
  }
}