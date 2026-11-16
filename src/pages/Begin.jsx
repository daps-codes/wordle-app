import { Link } from 'react-router-dom'

function Begin(){
    return (
        <div>
            <p>Shall we begin? (Y-Yes, N-No)</p>
            <button><Link to="/game">Yes</Link></button>
            <button><Link to="/bye">No</Link></button>
        </div>
    )
}

export default Begin;