import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getWord } from '../js/word.js';
import Grid from '../components/Grid.jsx';

function Game(){
    const [round, setRound] = useState(1);
    const [word, setWord] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [won, setWon] = useState(false);

    // color blocks
    const gray = "⬛";
    const yellow = "🟨";
    const green = "🟩";

    // Runs once when the comonent is mounted
    useEffect(()=>{
        async function loadWord(){
            const wotd = await getWord();
            setWord(wotd)
        }
        loadWord()

        const guessEL = document.getElementById('guess');
        guessEL.maxLength = 5;
    }, [])

    const navigate = useNavigate();

    const getResult = (guess, wordOfTheDay) => {
        let resultStr = "";
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
            //console.log(resultStr);
            return resultStr;
    }

    const disableControls = () => {
        const guessEl  = document.getElementById('guess');
           guessEl.disabled = true;
           const submitEl = document.getElementById('submit');
           submitEl.disabled = true;
    }

    const checkGuess = () => {
        const guessEL = document.getElementById('guess'); 
        const guess = guessEL.value.toUpperCase();
        //console.log(guess)
        //console.log(word);
        const result = getResult(guess, word);
        const resultP = document.getElementById('guessResult');
        resultP.innerText += `\nGuess ${round}: ${guess}\n ${result}` 
        if(result=="🟩🟩🟩🟩🟩"){
            disableControls();
            setWon(true);
            return;
        }

        if(round == 6){
           disableControls();
           return;
        }

        setRound(round+1);

        guessEL.value = '';
    }

    const redir = () => {
        setRedirect(true);
    }

    // Runs after every render
    useEffect(()=> {
        console.log("UseEffect called")
        if(redirect){           
            navigate('/result', {state: {won: won, round: round, wordOfTheDay: word}});
        }

        
    })

    return (
        <div>
            <p>Good luck. Happy Guessing below!</p>
            <div id="grid">
                <Grid height={6} width={5}/>
            </div>
            <input id="guess" placeholder=" Enter a five letter word"></input>
            <button id="submit" onClick={checkGuess}>Submit</button>
            <p id="guessResult"></p>
            <button onClick={redir}>View Results</button>
        </div>
    )
}

export default Game;