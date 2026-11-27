import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

function Result(){
    const location = useLocation();
    const { won, round, wordOfTheDay} = location.state;

    const congrats = "Congratulations! You win. The Word of the Day is";
    const lossMsg = "Unfortunately you lost. The Word of the Day is";
    //const  = "BREAK";
    useEffect(()=>{
        const resultGrid = document.getElementById('result-grid');
        console.log(resultGrid)
        console.log(JSON.parse(localStorage.getItem(`Outcome-${1}`)));
        resultGrid.innerHTML = new Array(round).fill('').map((item, index)=>{
            return `<div style="display: flex; gap: 4px;">${JSON.parse(localStorage.getItem(`Outcome-${index}`)).map((item)=>{
                return  `<div style="background-color: ${item}; width: 1rem; height:1rem;"></div>`
            }).join('')}</div>`}
            ).join('');
        //
        //resultGrid.innerHTML = new Array(round).fill('ass').map((item, index)=>{
          //  return `<div>${item}</div>`
            //console.log("Item: "+item+" Index: "+index)
        //}).join('');
        
        console.log(resultGrid)
    }, [])  
    return (
        <div className='container'>
            <div id='result-grid'></div>
            <p> Score: {round}/6</p>
            <p>{won == true ? congrats : lossMsg} {wordOfTheDay}</p>
            <button className='button'><Link to="/bye">Continue</Link></button>
        </div>
    )
}

export default Result;