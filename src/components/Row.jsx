import '../App.css'

function Row({ width, id, wotd, onSendData }){
    const arr = new Array(width).fill(0);
    let cellId = 0;
    let cells = document.querySelector(`#${CSS.escape(id)}.row`);
    let wordMatch =  false;

    const evaluateGuess = (guess, cells) => {
        cells = cells.children;

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
        onSendData(id, wordMatch);
        
    }

    const handleInput = (event) =>{

        const elemID = event.target.id.substring(2);
        const keyPressed = event.target.value.toUpperCase();
        
        //Handles only alphabetical inputs
        if(keyPressed != keyPressed.toLowerCase()){
            arr[elemID] = keyPressed;

            if(elemID != width-1 && keyPressed != keyPressed.toLowerCase()){
                const testID = `${id}-${Number(elemID)+1}`
                const nextElement = document.getElementById(testID);
                nextElement.focus();
            }
            event.target.style.border = "2px solid gray";
        } else{
            event.target.value = '';
        }  
    }

    const deleteInput = (event) => {
        if(event.key === 'Backspace'){
            event.preventDefault();
            const elemID = event.target.id.substring(2);
            const currentElement = document.getElementById(event.target.id)
            const prevID = `${id}-${Number(elemID)-1}`
            const prevElement = document.getElementById(prevID);
                        
            if(currentElement.value == '' && elemID > 0)
            {

                prevElement.style.border = "2px solid rgb(199, 198, 198)"; 
                prevElement.value ='';
            }else{
                event.target.style.border = "2px solid rgb(199, 198, 198)"; 
                event.target.value='';
            }
            
            if(elemID != 0){
                prevElement.focus();
            }
        }else if(event.key === "Enter" && event.target.id.substring(2) == width-1){
            const guess = arr.join('');
            evaluateGuess(guess, cells);
            sendData();
        }        
    }

    return (
        <div className="row" id={id}>
        {
            arr.map(()=> {
                return id == 0 ? <input key={cellId} id={`${id}-${cellId++}`} className="cell" maxLength="1"
                onChange={handleInput}
                onKeyDown={deleteInput}></input> : <input key={cellId} id={`${id}-${cellId++}`} className="cell" maxLength="1" 
                onChange={handleInput}
                onKeyDown={deleteInput}
                disabled></input>;
            })
        }
        
        </div>
    )
}


export default Row;