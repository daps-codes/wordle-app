import { Link } from 'react-router-dom';


function App(){
    return (
        <div>
            <h1>Welcome to Worldle!</h1>
            <p>The rules are simple. Guess the 5 letter word of the day. You have six guesses. After each round, each letter of your guess is assigned a colour:
            </p>
            <ul>
                <li>Grey: not in the word</li>
                <li>Yellow: in the word but in the wrong position</li>
                <li>Green: in the word and in the right position.</li>
            </ul>
            <p>If you correctly guess the word, all letters will be green and you win.</p>
            <button>
                <Link to="/begin">Continue</Link>
            </button>
        </div>
    )
}

export default App