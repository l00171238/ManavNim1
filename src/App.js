import React from 'react'
import Navbar from './components/NavBar/navbar'
import Intro from './components/intro/intro'
import Experience from './components/experience/experience'
import Contact from './components/contact/contact'
import Skills from './components/skills/skills'



function App() {
  return (
    <div className='App'>
     <Navbar />
     <Intro />
     <Skills />
     <Experience />
     <Contact />
    </div>
  )
}

export default App
