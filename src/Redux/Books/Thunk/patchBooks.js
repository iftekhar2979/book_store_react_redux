import { upadingBook } from "../action"

const patchBooks=(id,updateBookDetails)=>{
    return async(dispatch)=>{
        const responce=await fetch(`http://localhost:9000/books/${id}`,{
            method:'PATCH',
            body:JSON.stringify(updateBookDetails),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        const book=await responce.json()
        
        dispatch(upadingBook(book.id,book))
    }

}
export default patchBooks