// //Testing with hardcoded text
// var lines = "Sonnet 18 \n Shall I compare thee to a summer's day? \n Thou art more lovely and more temperate: \n Rough winds do shake the darling buds of May, \n And summer's lease hath all too short a date: \n Sometime too hot the eye of heaven shines, \n And often is his gold complexion dimm'd, \n And every fair from fair sometime declines, \n By chance, or nature's changing course untrimm'd: \n But thy eternal summer shall not fade, \n Nor lose possession of that fair thou ow'st, \n Nor shall death brag thou wander'st in his shade, \n When in eternal lines to time thou grow'st, \n So long as men can breathe, or eyes can see, \n So long lives this, and this gives life to thee. \n  \n Author:William Shakespeare";

var lines = [];//we declare lines as an empty array 
var words = [];
var partsOfSpeech = [];
var lexicon;
var finalSonnet;

function preload(){
  //loadStrings returns an array of Strings from our text file
  //you must have a local file in order for this function to work
  lines = loadStrings("assets/sonnet18.txt");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  lexicon = new RiLexicon();
  textSize(14);
  //this function expects a String as parameter,
  //not an array
  var joinedLines = lines.join(' ');
  words = RiTa.tokenize(joinedLines);
  partsOfSpeech = RiTa.getPosTags(words);
  frameRate(.5);
}

function draw(){
  background(255);
  var wordPosX = 0;
  var wordPosY = width/4;
  fill(0, 102, 153)
  text("Original Text: " + '\n' + lines, wordPosX,20, width-30, height);
  translate(0,wordPosY);
  fill(129, 100, 162);
  push();
  //NOTE: this text will overlap at 0,330
  text("MadLib Text:", 0,0,width,height);
  pop();
  translate(0,30);
  
  for(var i=0; i < words.length; i++){
    //we check whether each parts of speech exists
    //in our array
    if( partsOfSpeech[i] !== null){
      if(partsOfSpeech[i] === 'nn') {
        words[i] = lexicon.randomWord('nn') + " ";
      } else if (partsOfSpeech[i] === 'jj') {
        words[i] = lexicon.randomWord('jj') + " ";
      }
    }
  }
  //render the text only once per draw loop
  text(words.join(' '), 0, 0, width-30, height);
}