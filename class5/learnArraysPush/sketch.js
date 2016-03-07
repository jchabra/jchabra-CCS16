// need to intialize it for an array
var mySecondArray = [];

function setup() {
  createCanvas(500,500);
  
  for(var i=0; i<5; i++){
    mySecondArray.push(random(12));
  }
  
  print(mySecondArray);
}

function draw() {
  background(255);
  for(var i=0; i<mySecondArray.length; i++){
    fill(255, 0, 0, 100);
    rect(width/2, 
    height/2, 
    mySecondArray[i]*10, 
    mySecondArray[i]*10);
  }
}

function mousePressed(){
  // mySecondArray.push(random(22));
  // print(mySecondArray[mySecondArray.length-1]);
  // print(mySecondArray.length);
  var tempArray = mySecondArray.slice(0,2);
  mySecondArray = tempArray;
  print(mySecondArray);
  
}