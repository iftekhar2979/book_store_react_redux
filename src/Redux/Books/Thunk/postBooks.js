import { addBook } from "../action"

const postBooks=(bookDetail)=>{
    return async(dispatch)=>{
        const responce=await fetch('http://localhost:9000/books',{
            method:'POST',
            body:JSON.stringify(bookDetail),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        const book=await responce.json()
        
        dispatch(addBook(book))
    }
}
export default postBooks