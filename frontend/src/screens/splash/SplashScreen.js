import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@mui/material';
import SplashComponent from '../../components/splashComponent';
import { LampContainer, LampDemo } from '../../components/ui/Lamp';
export default function SplashScreen() {
  return (
    <div className='splash-screen-1'>
      <LampDemo />
    </div>
    // <Container>
    //   {/* <SplashComponent /> */}
    //   {/* <Box num={3} /> */}
    //   <div className='button_container'>
    //     <motion.div
    //       className='button'
    //       whileHover={{ scale: 1.1 }}
    //       transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    //     >
    //       Sign In
    //     </motion.div>
    //     <motion.div
    //       className='button'
    //       whileHover={{ scale: 1.1 }}
    //       transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    //     >
    //       Join Us
    //     </motion.div>
    //   </div>
    // </Container>
  );
}
