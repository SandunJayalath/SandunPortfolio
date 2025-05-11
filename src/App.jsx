import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDom from 'react-dom/client'
import "./styles/index.css"
import HomePage from './pages/HomePage'

ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
  </BrowserRouter>
)

export default App
