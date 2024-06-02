import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@mui/material'
import Box from '../../components/splashComponent'
import { ThemeContext } from '../../Theme'

export default function SplashScreen() {
  return (
    <Container>
      <Box num={1} />
      <Box num={2} />
      <Box num={3} />
      <div className='button_container'>
        <motion.div
          className='button'
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          Sign In
        </motion.div>
        <motion.div
          className='button'
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          Join Us
        </motion.div>
      </div>
    </Container>
  )
}
