import { ADDED_BOOK, BOOK_REMOVED, LOADED_BOOK, UPDATING_BOOK } from "./ActionTypes"

export const loaded=(book)=>{
    return{
        type:LOADED_BOOK,
        payload:book
    }
}
export const addBook=(book)=>{
    return{
        type:ADDED_BOOK,
        payload:book
    }
}
export const upadingBook=(id,updatedDetails)=>{
    return{
        type:UPDATING_BOOK,
        payload:{id,updatedDetails}
    }
}
export const removeBook=(id)=>{
    return {
        type:BOOK_REMOVED,
        payload:id
    }
}