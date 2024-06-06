import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@mui/material'
import SplashComponent from '../../components/splashComponent'
import { LampContainer, LampDemo } from '../../components/Lamp'
import Header from '../../components/Header'

export default function SplashScreen() {
  return (
    <>
      <LampDemo />
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
    </>
  )
}
