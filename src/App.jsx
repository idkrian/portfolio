import { useState, useRef } from 'react'
import './App.scss'
import HomeBar from './pages/HomeBar'
import AboutMe from './pages/AboutMe'
import ContactForm from './pages/ContactForm'
import Navbar from './components/Navbar'
import Portfolio from './pages/Portfolio'
import { ChakraProvider } from '@chakra-ui/react'
function App() {

  return (
    <ChakraProvider>
      {/* <Navbar /> */}
      <HomeBar />
      <AboutMe />
      <Portfolio />
      <ContactForm />
    </ChakraProvider>
  )
}

export default App
