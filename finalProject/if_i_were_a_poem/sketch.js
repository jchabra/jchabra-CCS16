/**
* Project Title: IF I WERE A POEM
* Author: Jasmine Chabra
* Description: This poem is called "It's Dark in Here" from
* the children's poetry book, "Where the Sidewalk Ends" where 
* the nouns and adjectives change randomly.
**/

var lines = [];//we declare lines as an empty array 
var words = [];
var partsOfSpeech = [];
var lexicon;
var replaceWords = [];
var bgImage;
var newWords = [];

function preload(){
  //loadStrings returns an array of Strings from our text file
  lines = loadStrings("assets/itsDarkInHere.txt");
  bgImage = loadImage('images/lion.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  lexicon = new RiLexicon();
  textSize(24);
  textFont('Roboto Slab');
  //this function expects a String as parameter,
  //not an array
  var joinedLines = lines.join('\n');
  replStr=joinedLines.replace(/\n/g,' # ');
  words = RiTa.tokenize(replStr);
  partsOfSpeech = RiTa.getPosTags(words);
  frameRate(0.2);
}

function draw(){
  background(255);
  image(bgImage, windowWidth/6, 250);
  
  var wordPosX = 0;
  var wordPosY = width/4;
  fill(0, 102, 153)
  translate(windowWidth/4,150);
  fill(129, 100, 162);
  
  push();
  fill(0);
  text("Where the Sidewalk Ends - " + '\n' + "IT'S DARK IN HERE", 0,0,width,height);
  pop();
  
  translate(0,90);
  replaceWords.length = 0;
  for(var i=0; i < words.length; i++){
    if( partsOfSpeech[i] !== null){
      if(partsOfSpeech[i] === 'nn') {
        replaceWords.push(i);
        words[i] = lexicon.randomWord('nn') + " ";
      } else if (partsOfSpeech[i] === 'jj') {
        words[i] = lexicon.randomWord('jj') + " ";
      }
    }
  }
  //render the text only once per draw loop
  push();
  newWords = words.join(' ');
  newWords=newWords.replace(/ # /g,'\n');
  textSize(20)
  text(newWords, 0, 0, 500, 500);
  pop();
}