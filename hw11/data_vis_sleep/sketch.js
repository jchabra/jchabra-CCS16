var h1;
var table;
var hrsSlept = [];

function preload() {
  // loading hours of sleep csv
  table = loadTable("data/hrs_sleep.csv", "csv", "header");
}
function setup() {
  createCanvas(600,600);
  // googlefont
  textFont("Open Sans");
  textSize(28);
  // adding background image
  bg = loadImage("assets/coffee.jpeg");
  // heading for the chart
  h1 = createElement('h1','HOURS OF SLEEP 4/18/16 - 4/24/16');
}

function draw(){
  background(bg);
  noStroke();
  translate(30,30);
  for(var c =0; c < table.getColumnCount(); c++){
    for(var r =0; r < table.getRowCount(); r++){
      push();  
      var cellData = table.getString(r, c);
      if(cellData != undefined){
        if(c < 1){ //list days
          translate(0, (r * 40)+20);
          fill(0);
          text(cellData, 0,0);
        }
        else { //create bar chart
          translate( (c * 25) + 200, r * 40);
          fill('#53ae9a');
          rect(0, 0, cellData*30, 28)
          // number of hours
          fill("#625f5e");
          textSize(15);
          text(cellData, -16,21);
        }
      }
      pop();
    }
  }
  h1.position(30,520);
}