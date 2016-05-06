var video;

function setup() {
  video = createVideo(['media/out.mp4']);
  video.loop();
  video.hide();//want to hide the dom elevant and create the canvas
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  image(video, width/2, height/2);
}