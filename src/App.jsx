import { useState } from 'react'
import './App.scss'
import HomeBar from './components/HomeBar'
import AboutMe from './components/AboutMe'
import ContactForm from './components/ContactForm'


function App() {

  return (
    <>
      <HomeBar />
      <AboutMe />
      <ContactForm />
    </>
  )
}

export default App
