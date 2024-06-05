import React, { useContext, useState } from 'react'
import './App.css'
import Clients from './screens/Clients'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import SplashScreen from './screens/splash/SplashScreen'
import { ThemeContext } from './Theme'
import { motion } from 'framer-motion'
import './style.css'
import Header from './components/Header'
import Home from './screens/Home'
import LoginScreen from './screens/Login'

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`App ${theme}`}>
      <Router>
        <Header />
        {/* <Container> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:username' element={<Clients />} />
        </Routes>
        {/* </Container> */}
      </Router>
    </div>
  )
}

export default App
