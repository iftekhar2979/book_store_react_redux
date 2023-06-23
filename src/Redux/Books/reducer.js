import { ADDED_BOOK, BOOK_REMOVED, LOADED_BOOK, UPDATING_BOOK } from "./ActionTypes"

const intialState = [
    {
        name: 'Slow Horses',
        author: 'Mich Herror',
        thumbline: "https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg",
        price: 14,
        rating: 3,
        featured: false,
        id: 1

    },

]
const bookId=(state)=>{
    const id = state?.reduce((maxId, todo) => Math.max(todo.id, maxId), 0)
    return id + 1
}
const bookReducer = (state = intialState, action) => {
    switch (action.type) {
        case LOADED_BOOK:
            return action.payload
        case ADDED_BOOK:
            return [...state,{id:bookId(state),...action.payload}]
        case UPDATING_BOOK:
            return state.map(book=>{
                const {id,updatedDetails}=action.payload
                if(book.id===id){
                    return updatedDetails
                }
                return book
            })
        case BOOK_REMOVED:
            return state.filter(book=>book.id!==action.payload)
        default:
            return state
    }

}
export default bookReducer