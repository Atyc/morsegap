

var myArray={
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
  " ": " "
};

//Used to find a key when we know the value
Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
             if( this[ prop ] === value )
                 return prop;
        }
    }
}


function translateMe(words) {
    total=words.length;
    $("#tableContainer").text("");
    for (var i = 0; i <total; i++) {
        
            var pair = document.createElement("div"); 
            pair.className="pair";
            pair.setAttribute("id", "pair");
            tableContainer.appendChild(pair);

            var englishLetterCell = document.createElement("div");   
            var notTranslated=words[i];
            var nt = document.createTextNode(notTranslated);     
            englishLetterCell.appendChild(nt); 
            pair.appendChild(englishLetterCell);

            var morseLetterCell = document.createElement("div");   
            var translated=myArray[words[i]];
            if (translated==undefined) translated="";
            var t = document.createTextNode(translated);     
            morseLetterCell.appendChild(t); 
            pair.appendChild(morseLetterCell);

            if (i==0) {
              var allMorse="";
              allMorse = allMorse + translated;
            }
            else {
              if (words[i]==" ") {
                allMorse = allMorse + translated;
              }
              else allMorse = allMorse + " " + translated;
            }
           $("#insert2").text(allMorse);
    };
};

function translateMorse(words) {
    var i;
    var allText="";
    
    $("#tableContainer2").text("");
    var wordsList = words.split(" ");
    wordsList.forEach(function(entry) {
        
        if (entry=="") entry=" ";
        if (entry=="/") entry=" ";
  
        morseLetter = myArray.getKeyByValue(entry);
        if (morseLetter==" / ") morseLetter=" ";
        if (!morseLetter) morseLetter="?";
        var pair2 = document.createElement("div"); 
        pair2.className="pair";
        pair2.setAttribute("id", "pair");
        tableContainer2.appendChild(pair2);

        var morseLetterCell = document.createElement("div");   
        var t = document.createTextNode(morseLetter);     
        morseLetterCell.appendChild(t); 
        pair2.appendChild(morseLetterCell);

        var englishLetterCell = document.createElement("div");   
        var nt = document.createTextNode(entry);     
        englishLetterCell.appendChild(nt); 
        pair2.appendChild(englishLetterCell);

        if (entry=" ") allText = allText + morseLetter;
        else allText = allText + " " + morseLetter;

        $("#insert").text(allText);
          i++;       

     });



};

