import react, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SingleBook from './SingleBook';
import InputSection from './InputSection';
import { useDispatch, useSelector } from 'react-redux';
import fetchBooks from '../Redux/Books/Thunk/fetchBooks';

const BooksSection = () => {
const booksState=useSelector(state=>state.books)
const filterSearch=useSelector(state=>state.filter.searched)
const [featured,setFeatured]=useState(false)
let search = new RegExp(`${filterSearch}`, 'gi')

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchBooks)
    },[dispatch])

    return (
        <main className="py-12 2xl:px-6">
            <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                <div className="order-2 xl:-order-1">
                    <div className="flex items-center justify-between mb-12">
                        <h4 className="mt-2 text-xl font-bold">Book List</h4>

                        <div className="flex items-center space-x-4">
                            <button className={`filter-btn ${!featured&& 'active-filter'}`} id="lws-filterAll" onClick={()=>setFeatured(false)}>All</button>
                            <button className={`filter-btn ${featured&& 'active-filter'}`} id="lws-filterFeatured" onClick={()=>setFeatured(true)}>Featured</button>
                        </div>
                    </div>
                    <div className="lws-bookContainer">
                

                     {featured?
                     booksState?.filter(book=>book.featured)
                     .filter(book=>book.name.match(search))
                      .map(book=><SingleBook key={book.id} book={book} />)
                      :  
                       booksState?.filter(book=>book.name.match(search))
                       .map(book=> <SingleBook key={book.id} book={book} />)
                      }
                    </div>
                </div>
                <InputSection />
            </div>
        </main>
    )
};

export default BooksSection;