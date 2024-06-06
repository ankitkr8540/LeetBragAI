import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Splash_first } from '../components/splashFirst'

export default function SplashScreen() {
  return (
    <>
      <Splash_first />
      <div className="button_container">
        <motion.div
          className="button"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          Sign In
        </motion.div>
        <motion.div
          className="button"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          Join Us
        </motion.div>
      </div>
    </>
  )
}
