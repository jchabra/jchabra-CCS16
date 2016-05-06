var video;
var bgColor;
var isSayHelloUp = false;
var isSayHelloDown = false;
var textPos;
var downTextPos;
var fontSize;
var downFontSize;

function setup() {
  bgColor = color("lightGray");
  createCanvas(windowWidth, windowHeight);
  // specify multiple formats for different browsers
  video = createVideo(['media/adele_hello.mp4']);
  video.loop(); // set the video to loop and start playing
  video.volume(0.5); //we set the volume to 0 because we don't want
  //sound
  video.showControls();
  //a centered video element
  // video.position(windowWidth/2 - (video.width/2),windowHeight/2 - (video.height/2));
  video.position(0, 150);
  video.size(windowWidth, windowHeight - 300);
  
  // colors
  var lightGray = "#f1f1f1";
  var orangish = "#da7061";
  var tealish = "#69a0a4";
  var darkGrayish = "#4e696e";
  var purplish = "#2d3241";
  var lightGreenish = "#aedac5";
  var yellow = "#f4f076";
  var blueish = "#72dfe6";
  var pinkish = "#d94a82";
  var greenish = "#51a269";
  var magentaish = "#833a58";
  
  // up hello
  video.addCue(5.0, sayHelloUp);
  // orangish - hello
  video.addCue(7.0, changeBgColor, color(orangish));
  // tealish - it's me
  video.addCue(9.2, changeBgColor, color(tealish));
  // grayish - meet
  video.addCue(17.7, changeBgColor, color(darkGrayish));
  // purplish - everything
  video.addCue(21.2, changeBgColor, color(purplish));
  // light green - they say
  video.addCue(24.0, changeBgColor, color(lightGreenish));
  // down hello
  video.addCue(31.0, sayHelloDown);
  // orangish - hello
  video.addCue(31.0, changeBgColor, color(orangish));
  // tealish - can you hear me
  video.addCue(33.8, changeBgColor, color(tealish));
  // yellow - i am in california
  video.addCue(36.7, changeBgColor, color(yellow));
  // light green - when we were younger
  video.addCue(42.8, changeBgColor, color(lightGreenish));
  // blueish - and free
  video.addCue(46.0, changeBgColor, color(blueish));
  // grayish - forgotten
  video.addCue(49.2, changeBgColor, color(darkGrayish));
  // pinkish - difference
  video.addCue(55.7, changeBgColor, color(pinkish));
  // greenish - million miles
  video.addCue(61.7, changeBgColor, color(greenish));
  // HELLO FROM THE OTHER SIDE!!
  // up hello
  video.addCue(66.3, sayHelloUp);
  // down hello
  video.addCue(68.0, sayHelloDown);
  // orangish
  video.addCue(68.0, changeBgColor, color(orangish));
  // blueish - must've called 
  video.addCue(73.8, changeBgColor, color(blueish));
  // magentaish - to tell you
  video.addCue(79.0, changeBgColor, color(magentaish));
  // tealish - but when
  video.addCue(84.7, changeBgColor, color(tealish));
  
  // hello from the other side (2nd time)
  // up hello
  video.addCue(90.3, sayHelloUp);
  // orangish - hello
  video.addCue(92.3, changeBgColor, color(orangish));
  // down hello
  video.addCue(93.3, sayHelloDown);
  // pinkish - at least i can say
  video.addCue(98.3, changeBgColor, color(pinkish));
  // yellow  - to tell you
  video.addCue(103.5, changeBgColor, color(yellow));
  // lightGreenish - breaking your heart 
  video.addCue(107.2, changeBgColor, color(lightGreenish));
  // tealish - dont matter
  video.addCue(109.8, changeBgColor, color(tealish));
  // light gray - anymore
  video.addCue(115.8, changeBgColor, color(lightGray));

  textSize(32);
  textFont('Raleway');
}

function draw() {
  background(bgColor);
  // text("current video time: " + video.time(), 20, 32);
  // text("video duration: " + video.duration(), 20, 64);
  if (isSayHelloUp) {
    if (textPos < 0) {
      isSayHelloUp = false;
    } else {
      textSize(fontSize);
      text("hello", windowWidth/2, textPos);
      textPos--;
      fontSize++;
    }
  }
  if (isSayHelloDown) {
    if (downTextPos < 0) {
      isSayHelloDown = false;
    } else {
      textSize(downFontSize);
      text("hello", windowWidth/2-250, downTextPos);
      downTextPos++;
      downFontSize++;  
    }
  }
}

function sayHelloUp() {
  push();
  isSayHelloUp = true;
  textPos = height / 2;
  fontSize = 32;
  pop();
}

function sayHelloDown() {
  push();
  // frameRate(10);
  isSayHelloDown = true;
  downTextPos = height/2 + 275;
  downFontSize = 20;
  
  pop();
}

function changeBgColor(col) {
  bgColor = col;
}