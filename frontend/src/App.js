import React, { useContext } from 'react'
import './App.css'
import Clients from './screens/Clients'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import SplashScreen from './screens/splash/SplashScreen'
import { ThemeContext } from './Theme'
import './style.css'

function App() {
  // const { theme } = useContext(ThemeContext)
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      <Router>
        {/* <Header /> */}
        <Container>
          <div className='header-toggle-buttons'>
            <button onClick={() => toggleTheme()}>{theme}</button>
          </div>
          <Routes>
            <Route path='/' element={<SplashScreen />} />
            <Route path='/:username' element={<Clients />} />
          </Routes>
        </Container>
      </Router>
    </div>
  )
}

export default App
