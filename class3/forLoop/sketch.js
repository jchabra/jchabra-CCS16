var lines = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  
  for(var x = 0; x < 3; x++) {
    for(var y=0; y<3; y++) {
      rect(x*12, y*100, 8, height/2);  
    }
  }

// From class notes
//   for(var x=0; x < 3; x++){
// 	//and also across the y-axis
//   	for(var y=0; y < 3; y++){
//     	ellipse(x*10,y*10, 40,40);
//     }
//   }
}