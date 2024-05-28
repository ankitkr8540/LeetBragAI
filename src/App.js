import React from 'react'
import './App.css'
import Clients from './components/Clients';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:username' element={<Clients />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
