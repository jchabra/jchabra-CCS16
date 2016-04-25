var angle = 6.0;
var rotationSpeed = 20;
var ellipseSize = 5;

function setup(){
  // createCanvas(windowWidth, windowHeight);
  createCanvas(500, 500);

  // spiral slider
  spiralSlider = createSlider(1, 50, rotationSpeed);
  spiralSlider.position(10, 535);
  spiralSlider.style('width', '480px');

  // ellipse slider
  ellipseSlider = createSlider(1, 15, ellipseSize);
  ellipseSlider.position(10, 580);
  ellipseSlider.style('width', '480px');

  // slider headings
  speedP = createElement('p', 'Spiral Speed:');
  sizeP = createElement('p', 'Ellipse Size:');
}
function draw() {
  noStroke();
  var speed = spiralSlider.value();
  var newEllipseSize = ellipseSlider.value();
  // random colors for fill
  var red=random(255);
  var blue=random(255);
  var green=random(255);

  speedP.position(10, 510);
  sizeP.position(10, 560);

  // the design will start in the middle of the canvas
  translate(width/2,height/2);
  angle += 0.1;
  rotate(angle);
  // speed of the movement of the design
  frameRate(speed);
  for(var i =0; i < 8; i++){
    push();
    rotate(TWO_PI * i / 8);
    fill(red, blue, green,100);
    // using circles
    ellipse(frameCount % (width/2),0,newEllipseSize,newEllipseSize);
    pop();
  }
}