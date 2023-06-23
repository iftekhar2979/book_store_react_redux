import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headers from './Components/Headers'
import BooksSection from './Components/BooksSection'
import { Provider } from 'react-redux'
import { store } from './Redux/store'

function App() {
 

  return (
    <>
    <Provider store={store}>
      <Headers/>
      <BooksSection/>
      </Provider>
    </>
  )
}

export default App
