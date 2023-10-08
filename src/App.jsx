import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import Navbar from './Components/NavBar'
import Footer from './Components/Footer'



function App() {
  return (
    
    <BrowserRouter>
       <Navbar/>
        <Routes>
            <Route path={'/'} element={<HomePage/>} />
        </Routes>
        
        <Footer/>
    </BrowserRouter>
  )
}

export default App
