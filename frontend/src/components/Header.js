import { Container } from '@mui/material'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../Theme'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const linkList = [
  'About',
  'News Letter',
  'Contact Us',
  'Contributors',
  'Get Started',
]
const parentVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: '-4rem' },
}

const childVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: '-2rem' },
}

function Header() {
  const { toggleTheme } = useContext(ThemeContext)
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => setIsOn(!isOn)
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  }

  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [prevScroll, setPrevScroll] = useState(0)

  function update(latest, prev) {
    if (latest < prev) {
      setHidden(false)
      // console.log("visible");
    } else if (latest > 100 && latest > prev) {
      setHidden(true)
      // console.log("hidden");
    }
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    update(latest, prevScroll)
    setPrevScroll(latest)
  })
  return (
    <motion.nav
      className='navStyles'
      variants={parentVariants}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.6,
        staggerChildren: 0.05,
      }}
    >
      <p>Logo</p>
      <div className='navLinksWrapper'>
        {linkList.map((item, i) => (
          <motion.div /** ... **/
            key={i}
            variants={childVariants}
            transition={{
              ease: [0.1, 0.25, 0.3, 1],
              duration: 0.4,
            }}
          >
            {item}
          </motion.div>
        ))}
        <div
          className='switch'
          data-isOn={isOn}
          onClick={() => {
            toggleTheme()
            toggleSwitch()
          }}
        >
          <motion.div className='handle' layout transition={spring} />
        </div>
      </div>
    </motion.nav>
  )
}

export default Header
