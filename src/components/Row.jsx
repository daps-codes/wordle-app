import '../App.css'

function Row({ width, id }){
    const arr = new Array(width).fill(0);
    //console.log(id)
    return (
        <div className="row" id={id}>
        {
            arr.map(()=> {
                return id == 1 ? <input className="cell" maxLength="1"></input> : <input className="cell" maxLength="1" disabled></input>;
           
            })
        }
        
        </div>
    )
}

export default Row;