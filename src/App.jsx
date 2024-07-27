import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'
import Skills from './Components/About/Skills'


const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Experience/>
        <Contact/>
    </div>
  )
}

export default App

