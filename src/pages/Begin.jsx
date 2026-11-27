import { Link } from 'react-router-dom'

function Begin(){
    return (
        <div className='container' id='begin'>
            <h1>Let's Play Wordle!</h1>
            <p>Shall we begin?</p>

            <div className='button-container'>
                <button className='button'><Link to="/game">Yes</Link></button>
                <button className='button'><Link to="/bye">No</Link></button>
            </div>
        </div>
    )
}

export default Begin;