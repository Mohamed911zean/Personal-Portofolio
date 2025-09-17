import React from 'react'
import './App.css'
import NavBar from './NavBar.jsx'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import Projects from './Projects.jsx'
const App = () => {
  return (
    <BrowserRouter basename='/Personal-Portofolio'>

    <NavBar/>

    <Routes>
      

<Route path='/' element={<Home/>} />
<Route path='/projects' element={<Projects/>}/>
    </Routes>

    <Footer/>

    </BrowserRouter>
  )
}

export default App