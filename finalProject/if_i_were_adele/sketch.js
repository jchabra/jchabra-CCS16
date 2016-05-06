/**
* Project Title: IF I WERE ADELE SINGING HELLO...
* Author: Jasmine Chabra
* Description: The background colors change at 
* certain points of the song. Each color 
* coordinates with specific words and sounds
* within the song.
* 
**/

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
  video = createVideo(['media/adele_hello.mp4']);
  video.loop(); // set the video to loop and start playing
  //sound
  video.volume(0.5); 
  video.showControls();
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
  video.addCue(0.01, sayHelloUp);
  // orangish - hello
  video.addCue(0.5, changeBgColor, color(orangish));
  // tealish - it's me
  video.addCue(3.2, changeBgColor, color(tealish));
  // grayish - meet
  video.addCue(11.2, changeBgColor, color(darkGrayish));
  // purplish - everything
  video.addCue(15.1, changeBgColor, color(purplish));
  // light green - they say
  video.addCue(17.8, changeBgColor, color(lightGreenish));
  // down hello
  video.addCue(24.8, sayHelloDown);
  // orangish - hello
  video.addCue(24.8, changeBgColor, color(orangish));
  // tealish - can you hear me
  video.addCue(27.5, changeBgColor, color(tealish));
  // yellow - i am in california
  video.addCue(30.7, changeBgColor, color(yellow));
  // light green - when we were younger
  video.addCue(36.8, changeBgColor, color(lightGreenish));
  // blueish - and free
  video.addCue(40.0, changeBgColor, color(blueish));
  // grayish - forgotten
  video.addCue(43.2, changeBgColor, color(darkGrayish));
  // pinkish - difference
  video.addCue(49.3, changeBgColor, color(pinkish));
  // greenish - million miles
  video.addCue(55.4, changeBgColor, color(greenish));
  // HELLO FROM THE OTHER SIDE!!
  // up hello
  video.addCue(61.5, sayHelloUp);
  // down hello
  video.addCue(62.0, sayHelloDown);
  // orangish
  video.addCue(61.3, changeBgColor, color(orangish));
  // blueish - must've called 
  video.addCue(67.8, changeBgColor, color(blueish));
  // light gray - anymore
  video.addCue(72.0, changeBgColor, color(lightGray));

  textSize(32);
  textFont('Raleway');
}

function draw() {
  background(bgColor);
  // text("current video time: " + video.time(), 20, 32);
  // text("video duration: " + video.duration(), 20, 64);
  push();
  textAlign(CENTER);
  text("IF I WERE ADELE SINGING 'HELLO'...", width/2, 32)
  pop();
  push();
  textSize(12)
  textAlign(CENTER);
  text("Enjoy the experience with the volume up...", width/2, 50)
  pop();
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
// A text of Hello floats above the video
function sayHelloUp() {
  push();
  isSayHelloUp = true;
  textPos = height / 2 - 100;
  fontSize = 32;
  pop();
}
// A text of Hello floats below the video
function sayHelloDown() {
  push();
  isSayHelloDown = true;
  downTextPos = height/2 + 275;
  downFontSize = 20;
  pop();
}
// this changes the background color
function changeBgColor(col) {
  bgColor = col;
}