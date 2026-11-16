 export async function getWord(){
    const url = "https://randomapi.dev/api/words?type=noun&minLength=5&maxLength=5&count=1"

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }
        const result = await response.json();

        return result.data[0].word.toUpperCase();
    }catch(error){
        console.error(error.message);
    }
}

//export default word;