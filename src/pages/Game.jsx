import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getWord } from '../js/word.js';

function Game(){
    const [round, setRound] = useState(1);
    const [word, setWord] = useState('');
    const [redirect, setRedirect] = useState(false);
    let won = false;

    useEffect(()=>{
        async function loadWord(){
            const wotd = await getWord();
            setWord(wotd)
        }
        loadWord()
    }, [])

    const navigate = useNavigate();

    const incrementRound = () => {
        setRound(round+1);
    }

    useEffect(()=> {
        console.log("UseEffect called")
        if(round == 6){           
            navigate('/result', {state: {won: won, round: round, wordOfTheDay: word}});
        }
    })

    return (
        <div>
            <p>Good luck. Happy Guessing below!</p>
            <div id="grid">GRID GOES HERE</div>
            <button onClick={incrementRound}>Next Round</button>
            <p> Round {round}</p>
        </div>
    )
}

export default Game;