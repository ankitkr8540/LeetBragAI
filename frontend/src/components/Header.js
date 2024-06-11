import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const parentVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-4rem" },
};

const childVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-2rem" },
};

function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  function update(latest, prev) {
    if (latest < prev) {
      setHidden(false);
      // console.log("visible");
    } else if (latest > 100 && latest > prev) {
      setHidden(true);
      // console.log("hidden");
    }
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    update(latest, prevScroll);
    setPrevScroll(latest);
  });
  return (
    <motion.nav
      className="navStyles font-openSansRegular text-lg"
      variants={parentVariants}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.6,
        staggerChildren: 0.05,
      }}
    >
      <p>Logo</p>
    </motion.nav>
  );
}

export default Header;
