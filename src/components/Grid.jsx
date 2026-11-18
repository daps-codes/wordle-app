import Row from './Row.jsx'
import '../App.css'

function Grid({ height , width}){
    const arr = new Array(height).fill(0);
    let rowId = 1;
   //console.log(arr)
    return (
        <div className="grid">
        {arr.map(() => { 
            console.log('rows loaded!!');
            return <Row id={rowId++} width={width}/>;
        })}
        
        </div>

    );
}

export default Grid;