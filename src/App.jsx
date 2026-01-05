import React from 'react'
import {Routes , Route, BrowserRouter} from 'react-router-dom';
import HomePage from './page/home_page'

function App() {

  return (
    <>
    <BrowserRouter> 
    <Routes>  
    <Route path='/' element={<HomePage/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
