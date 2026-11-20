import Row from './Row.jsx'
import '../App.css'
import { useState, useEffect } from 'react';

function Grid({ height , width, wotd}){
    const arr = new Array(height).fill(0);
    let rowId = 1;
    const [activeRow, setActiveRow] = useState(1);


    const updateActiveRow = (rowID) => {
        setActiveRow(rowID);
    }

    useEffect(()=>{
        const rows = document.getElementsByClassName('row');
        console.log(rows);
        //get the curreent active row
        let activeR;
        for(const row of rows){
            console.log(row.id)
            console.log(activeRow);
            if(row.id == activeRow){
                activeR = row;
            }
        }

        for(const cell of activeR.children){
            cell.disabled = false;
        }
    }, [activeRow])
   
    return (
        <div className="grid">
        {arr.map(() => { 
            console.log('rows loaded!!');
            return <Row onSendData={updateActiveRow} id={rowId++} width={width} wotd={wotd}/>;
        })}
        
        </div>

    );
}

export default Grid;