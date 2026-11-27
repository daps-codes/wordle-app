import { useLocation, Link } from 'react-router-dom';

function Result(){
    const location = useLocation();
    const { won, round, wordOfTheDay} = location.state;

    const congrats = "Congratulations! You win. The Word of the Day is";
    const lossMsg = "Unfortunately you lost. The Word of the Day is";
    //const  = "BREAK";

    return (
        <div className='container'>
            <p> Score: {round}/6</p>
            <p>{won == true ? congrats : lossMsg} {wordOfTheDay}</p>
            <button className='button'><Link to="/bye">Continue</Link></button>
        </div>
    )
}

export default Result;