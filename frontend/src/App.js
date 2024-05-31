import React from 'react'
import './App.css'
import Clients from './screens/Clients';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/Home';
import Header from './components/Header';
import { Container } from '@mui/material';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:username' element={<Clients />} />
          </Routes>
        </Container>
      </Router>
    </div>
  )
}

export default App
