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
    //const gray = "⬛";
    //const yellow = "🟨";
    //const green = "🟩";

    // Runs once when the comonent is mounted
    useEffect(()=>{
        async function loadWord(){
            const wotd = await getWord();
            setWord(wotd)
        }
        loadWord()
    }, [])

    const navigate = useNavigate();

    const redir = (red, match, gameRound) => {
        setRedirect(red);
        setWon(match);
        setRound(gameRound);
    }

    // Runs after every render
    useEffect(()=> {
        if(redirect){           
            navigate('/result', {state: {won: won, round: round, wordOfTheDay: word}});
        }

        
    })

    return (
        <div id="game">
            <h1>Wordle</h1>
            <p>Good luck. Happy Guessing below!</p>
            <div id="grid">
                <Grid onRoundEnd={redir} height={6} width={5} wotd={word}/>
            </div>
        </div>
    )
}

export default Game;