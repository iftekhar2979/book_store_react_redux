import { removeBook } from "../action"

const deleteBook=(id)=>{
    return async(dispatch)=>{
        const responce=await fetch(`http://localhost:9000/books/${id}`,{
            method:'DELETE',
            },
        )
        
        dispatch(removeBook(id))
    }

}
export default deleteBook