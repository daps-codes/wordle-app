import Row from './Row.jsx'
import '../App.css'
import { useState, useEffect } from 'react';

function Grid({ height , width, wotd, onRoundEnd}){
    const arr = new Array(height).fill(0);
    let rowId = 0;
    const [activeRow, setActiveRow] = useState(0);
    const [match, setMatch] = useState(false);

    const updateActiveRow = (rowID, wordMatch) => {
        setActiveRow(rowID+1);
        setMatch(wordMatch);
    }

    useEffect(()=>{
        if(activeRow == height || match){
            onRoundEnd(true, match, activeRow);
        }else{
            const rows = document.getElementsByClassName('row');
            //console.log(rows);
            //get the curreent active row
            let activeR;
            for(const row of rows){
                //console.log(row.id)
                //console.log(activeRow);
                if(row.id == activeRow){
                    activeR = row;
                    break;
                }
            }

            for(const cell of activeR.children){
               cell.disabled = false; 
               if(cell.id.substring(2) == '0'){
                    cell.focus();
                }
                
            }
        }
    }, [activeRow, match])
   
    return (
        <div className="grid">
        {arr.map(() => { 
            //console.log('rows loaded!!');
            return <Row onSendData={updateActiveRow} key={rowId} id={rowId++} width={width} wotd={wotd}/>;
        })}
        
        </div>

    );
}

export default Grid;