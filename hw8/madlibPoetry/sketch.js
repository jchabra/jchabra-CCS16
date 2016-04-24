//Testing with hardcoded text
var lines = "Sonnet 18 \r Shall I compare thee to a summer's day? \r Thou art more lovely and more temperate:\r Rough winds do shake the darling buds of May,\r And summer's lease hath all too short a date:\r Sometime too hot the eye of heaven shines,\r And often is his gold complexion dimm'd,\r And every fair from fair sometime declines,\r By chance, or nature's changing course untrimm'd:\r But thy eternal summer shall not fade,\r Nor lose possession of that fair thou ow'st,\r Nor shall death brag thou wander'st in his shade,\r When in eternal lines to time thou grow'st,\r So long as men can breathe, or eyes can see,\r So long lives this, and this gives life to thee.\r Author:William Shakespeare;"

// var lines = [];//we declare lines as an empty array 
var words = [];
var partsOfSpeech = [];
var lexicon;

// function preload(){
//   //loadStrings returns an array of Strings from our text file
//   //you must have a local file in order for this function to work
//   lines = loadStrings("assets/furniture.txt");
// }

function setup() {
  createCanvas(800,windowHeight);
  lexicon = new RiLexicon();
  textSize(14);
  words = RiTa.tokenize(lines);
  partsOfSpeech = RiTa.getPosTags(words);
  frameRate(.5);
}
  
function draw(){
  background(255);
  var wordPosX = 0;
  var wordPosY = width/4;
  fill(0, 102, 153)
  text(lines, 0,0,width,height);
  
  for(var i=0; i < words.length; i++){
    fill(129, 100, 162);
    text(words[i], wordPosX, wordPosY, 
    textWidth(words[i]),20);

    //we check whether each parts of speech exists
    //in our array
    if( partsOfSpeech[i] != null){
      if(partsOfSpeech[i] === 'nn') {
        words[i] = lexicon.randomWord('nn') + " ";
      } else if (partsOfSpeech[i] === 'jj') {
        words[i] = lexicon.randomWord('jj') + " ";
      }
    }
    
    wordPosX += textWidth(words[i])+ 30;
    
    //if wordPosX goes beyond our width,
    //move the text down to a new line
    if(wordPosX > 700){
      wordPosX = 0;
      wordPosY += 30;
    }
  }
}
  
  
  
  
  
  
  
  
  
  