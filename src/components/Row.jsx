import '../App.css'

function Row({ width, id, wotd, onSendData }){
    const arr = new Array(width).fill(0);
    let cellId = 0;
    console.log(wotd)
    let cells = document.querySelector(`#${CSS.escape(id)}.row`);
    //cells = cells.children;
    //console.log(cells);
    
    /*
    for(const cell of cells){
        cell.addEventListener('input',(event)=>{
            arr[cell.id] = event.target.value.toUpperCase();
            console.log(arr);
        })
        

        if(cell.id == width-1){
            cell.addEventListener('keydown', (event)=>{
                if(event.key === "Enter"){
                const guess = arr.join('');
                evaluateGuess(guess, cells);
                console.log("HALLOOO")
                //sendData();
                }
            })
        }
            
    }
    */
    //console.log(id)

    const evaluateGuess = (guess, cells) => {
        for(let j = 0; j < width; j++){
            let currentCell;
            for(const cell of cells) {
                if(cell.id == j){
                    currentCell = cell;
                    break;
                }
            }

            let letter = guess.charAt(j);
            if(wotd.includes(letter) && wotd.charAt(j) == letter){
                //console.log(currentCell);
                currentCell.style.backgroundColor = "green";
                currentCell.disabled = true;
            }else if(wotd.includes(letter)){
                currentCell.style.backgroundColor = "yellow";
                currentCell.disabled = true;
            }else{
                currentCell.style.backgroundColor = "gray";
                currentCell.disabled = true;
            }
        }
    }   

    const sendData = () => {
        console.log(id);
        onSendData(id+1);
        
    }
    return (
        <div className="row" id={id}>
        {
            arr.map(()=> {
                return id == 1 ? <input id={cellId++} className="cell" maxLength="1"
                onChange={(event)=>{
                    arr[event.target.id] = event.target.value.toUpperCase();
                    console.log(arr);
                }}
                onKeyDown={(event)=>{
                if(event.key === "Enter" && event.target.id == width-1){
                const guess = arr.join('');
                evaluateGuess(guess, cells);
                console.log("HALLOOO")
                sendData();
         
                }}}></input> : <input id={cellId++} className="cell" maxLength="1" 
                onChange={(event)=>{
                    arr[event.target.id] = event.target.value.toUpperCase();
                    console.log(arr);
                }}
                onKeyDown={(event)=>{
                if(event.key === "Enter" && event.target.id == width-1){
                const guess = arr.join('');
                evaluateGuess(guess, cells);
                console.log("HALLOOO")
                sendData();
         
                }}}
                disabled></input>;
            })
        }
        
        </div>
    )
}


export default Row;