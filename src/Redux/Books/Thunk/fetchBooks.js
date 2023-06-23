import { loaded } from "../action"

const fetchBooks = async (dispatch) => {
    const responce = await fetch('http://localhost:9000/books')
    const books =await responce.json()
    dispatch(loaded(books))
}
export default fetchBooks