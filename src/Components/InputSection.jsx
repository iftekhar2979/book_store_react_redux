import react, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postBooks from '../Redux/Books/Thunk/postBooks';
import patchBooks from '../Redux/Books/Thunk/patchBooks';
import { cancelEditing } from '../Redux/EditBooks/reducer';

const InputSection = () => {
    const updatingState = useSelector(state => state.edit)
    const [inputs, setInput] = useState({})
    const dispatch = useDispatch()
    const [isCheaked, setIscheaked] = useState(false)
    const { details: { name, author, price, rating, thumbnail, featured,id } = {}, isEditing = '' } = updatingState
    const handleChange = (e) => {
        setInput((old) => {
            return { ...old, [e.target.name]: e.target.value }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let form = e.target
        if (isEditing) {
            let { name, author, price, rating, thumbnail } = form
            const editedObject = { 
                name: name.value, 
                author: 
                author.value, 
                price: parseFloat(price.value), 
                rating: parseFloat(rating.value), 
                thumbnail: thumbnail.value,
                featured:isCheaked
            }
            dispatch(patchBooks(id,editedObject))
            dispatch(cancelEditing(id,isEditing))
            setInput('')
            form.reset()
            
        }else{
            let { rating, price } = inputs
           
            
            let newObj = { ...inputs, featured: isCheaked, rating: parseFloat(rating), price: parseFloat(price) }
    
            dispatch(postBooks(newObj))
            setInput('')
            // newObj = {}
         
            form.reset()
        }


    }
    return (
        <div>
            <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
                <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
                <form className="book-form" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label for="name">Book Name</label>
                        <input required className="text-input" defaultValue={updatingState ? name : ''} type="text" onChange={handleChange} id="input-Bookname" name="name" />
                    </div>

                    <div className="space-y-2">
                        <label for="category">Author</label>
                        <input required className="text-input" defaultValue={updatingState ? author : ''} type="text" onChange={handleChange} id="input-Bookauthor" name="author" />
                    </div>

                    <div className="space-y-2">
                        <label for="image">Image Url</label>
                        <input required className="text-input" type="text" defaultValue={updatingState ? thumbnail : ""} onChange={handleChange} id="input-Bookthumbnail" name="thumbnail" />
                    </div>

                    <div className="grid grid-cols-2 gap-8 pb-4">
                        <div className="space-y-2">
                            <label for="price">Price</label>
                            <input required className="text-input" defaultValue={updatingState ? price : ''} onChange={handleChange} type="number" id="input-Bookprice" name="price" />
                        </div>

                        <div className="space-y-2">
                            <label for="quantity">Rating</label>
                            <input required className="text-input" defaultValue={updatingState ? rating : ''} onChange={handleChange} type="number" id="input-Bookrating" name="rating" min="1" max="5" />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input id="input-Bookfeatured" type="checkbox" onClick={() => setIscheaked(!isCheaked)} checked={isEditing?(featured?isCheaked:!isCheaked):isCheaked} name="featured" className="w-4 h-4" />
                        <label for="featured" className="ml-2 text-sm"> This is a featured book </label>
                    </div>

                    <button type="submit" className="submit"  id="submit">{isEditing ? 'Update Book' : 'Add Book'}</button>
                </form>
            </div>
        </div>
    )
};
export default InputSection;