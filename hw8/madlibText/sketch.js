//Testing with hardcoded text
var lines = "FURNITURE: The institution of schools of art and design, and the efforts of serials and magazines devoted to artistic matters, have had their proper effect in the creation of a pretty general distaste for the clumsy and inartistic forms which characterised cabinets and furniture generally some years back.";

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
  
  
  
  
  
  
  
  
  
  