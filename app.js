const prompt = require("prompt-sync")();

async function main(){

    // Game instructions and prompt
    let instructions = "\nWelcome to Worldle. The rules are simple. Guess the 5 letter word of the day. You have six guesses. After each round, each letter of your guess is assigned a colour: \nGrey: not in the word \nYellow: in the word but in the wrong position \nGreen: in the word and in the right position. \n\nIf you correctly guess the word, all letters will be green and you win.\n\n"

    let promptBegin = "Shall we begin? (Y-Yes, N-No)";
    let gameStart = "Good luck. Happy Guessing below!";
    let congrats = "\nCongratulations! You win. The Word of the Day is";
    let lossMsg = "\nUnfortunately you lost. The Word of the Day is";

    // Game logic and architecture

    //Generate the word of the day, randomly
    let wordOfTheDay = await getWord();
    
    // color blocks
    let gray = "⬛";
    let yellow = "🟨";
    let green = "🟩";

    // Begins game loop
    console.log(instructions);

    console.log(promptBegin);

    const begin = prompt();

    //console.log(`Testing purposes - The word is ${wordOfTheDay}`);

    //counter
    let roundCounter = 0;

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
            roundCounter++;
        }

        if(roundCounter==6){
            console.log(`${lossMsg} ${wordOfTheDay}.\nBetter luck next time!`)
        }
    }else{
        //exits
        bye();
    }

}

function bye(){
    let goodBye = "Thanks for playing Wordle. Goodbye.\n";
    console.log(goodBye);
}

async function getWord(){
    const url = "https://random-word-api.herokuapp.com/word?length=5"

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }
        const result = await response.json();
        return result[0].toUpperCase();
    }catch(error){
        console.error(error.message);
    }
}

main();