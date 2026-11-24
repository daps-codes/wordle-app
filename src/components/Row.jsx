import '../App.css'

function Row({ width, id, wotd, onSendData }){
    const arr = new Array(width).fill(0);
    let cellId = 0;
    //console.log(wotd)
    let cells = document.querySelector(`#${CSS.escape(id)}.row`);
    let wordMatch =  false;
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
        cells = cells.children;
        //console.log(cells);

        for(let j = 0; j < width; j++){
            let currentCell;
            for(const cell of cells) {
                if(cell.id.substring(2) == j){
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

        if(guess == wotd){
            wordMatch = true;
        }
    }   

    const sendData = () => {
        //console.log(id);
        onSendData(id, wordMatch);
        
    }
    return (
        <div className="row" id={id}>
        {
            arr.map(()=> {
                return id == 0 ? <input key={cellId} id={`${id}-${cellId++}`} className="cell" maxLength="1"
                onChange={(event)=>{
                    const elemID = event.target.id.substring(2);
                    const keyPressed = event.target.value.toUpperCase();
                    arr[elemID] = keyPressed;
                    //console.log(arr);
                    if(elemID != width-1 && keyPressed != keyPressed.toLowerCase()){
                        const testID = `${id}-${Number(elemID)+1}`
                        //console.log(testID)
                        const nextElement = document.getElementById(testID);
                        nextElement.focus();
                    }
                }}
                onKeyDown={(event)=>{
                if(event.key === "Enter" && event.target.id.substring(2) == width-1){
                const guess = arr.join('');
                evaluateGuess(guess, cells);
                //console.log("HALLOOO")
                sendData();
         
                }}}></input> : <input key={cellId} id={`${id}-${cellId++}`} className="cell" maxLength="1" 
                onChange={(event)=>{
                    const elemID = event.target.id.substring(2);
                    const keyPressed = event.target.value.toUpperCase();
                    arr[elemID] = keyPressed;
                    //console.log(arr);
                     if(elemID != width-1 && keyPressed != keyPressed.toLowerCase()){
                        const testID = `${id}-${Number(elemID)+1}`
                        //console.log(testID)
                        const nextElement = document.getElementById(testID);
                        nextElement.focus();
                    }
                }}
                onKeyDown={(event)=>{
                if(event.key === "Enter" && event.target.id.substring(2) == width-1){
                const guess = arr.join('');
                evaluateGuess(guess, cells);
                //console.log("HALLOOO")
                sendData();
         
                }}}
                disabled></input>;
            })
        }
        
        </div>
    )
}


export default Row;