import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/Bookmarks/BookMarks'
import Header from './components/Header/Header'

function App() {


  return (
    <>
      <Header></Header>
      <div className="md:flex">
      <Blogs></Blogs>
      <BookMarks></BookMarks>

      </div>
      
      
    </>
  )
}

export default App
