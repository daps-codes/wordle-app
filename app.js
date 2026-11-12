const prompt = require("prompt-sync")();

// Random array of 5 letter words (in future fetch from API endpoint)
let words = ["apple", "bread", "mouth"];

 // Game instructions and prompt
let instructions = "\nWelcome to Worldle. The rules are simple. Guess the 5 letter word of the day. You have six guesses. After each round, each letter of your guess is assigned a colour: \nGrey: not in the word \nYellow: in the word but in the wrong position \nGreen: in the word and in the right position. \n\nIf you correctly guess the word, all letters will be green and you win.\n\n"

let promptBegin = "Shall we begin? (Y-Yes, N-No)";
let gameStart = "Good luck. Happy Guessing below!";
let congrats = "\nCongratulations! You win. The Word of the Day is";
let goodBye = "Thanks for playing Wordle. Goodbye.\n";

// Game logic and architecture

//Generate the word of the day, randomly
let wordOfTheDay = words[Math.floor(Math.random() * words.length)].toUpperCase();

// color blocks
let gray = "⬛";
let yellow = "🟨";
let green = "🟩";

// Begins game loop
console.log(instructions);

console.log(promptBegin);

const begin = prompt();

//console.log(`Testing purposes - The word is ${wordOfTheDay}`);

// Validate input
if(begin.toLowerCase() == "y"){
    console.log(gameStart);
     // Six guesses
    for(let i = 0; i < 6; i++){
        let resultStr = "";
        const guess = prompt().toUpperCase();
        for(let j = 0; j < guess.length; j++){
            
            let letter = guess.charAt(j);
            if(wordOfTheDay.includes(letter) && wordOfTheDay.charAt(j) == letter){
                resultStr += green;
            }else if(wordOfTheDay.includes(letter)){
                resultStr += yellow;
            }else{
                resultStr += gray;
            }
        }
        console.log(resultStr);
        if(resultStr=="🟩🟩🟩🟩🟩"){
            console.log(`${congrats} ${wordOfTheDay}.\n`);
            bye();
            break;
        }
    }
}else{
    //exits
    bye();
}

function bye(){
    console.log(goodBye);
}

