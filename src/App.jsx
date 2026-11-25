import { Link } from 'react-router-dom';
import './App.css'

function App(){
    return (
        <div id="homepage">
            <h1>Welcome to Wordle!</h1>
            <p>The rules are simple. Guess the 5 letter word of the day. You have six guesses. After each round, each letter of your guess is assigned a colour:
            </p>
            <ul>
                <li>Grey: not in the word</li>
                <li>Yellow: in the word, wrong spot</li>
                <li>Green: in the word, right spot.</li>
            </ul>
            <p>If you correctly guess the word, all letters will be green and you win.</p>
            <button id="button">
                <Link to="/begin">Continue</Link>
            </button>
        </div>
    )
}

export default App