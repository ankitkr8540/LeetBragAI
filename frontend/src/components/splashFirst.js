import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import LoginScreen from "../screens/Login";
import SignUp from "../screens/SignUp";

export function SplashFirst() {
  return (
    <LampContainer className="w-screen h-9">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 mb-20 bg-clip-text text-center 
        text-4xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        AI-Powered Professional Bragging <br />
        <div className="mt-2 md:mt-0.5 md:text-3xl text-xl">
          Your Achievements, Perfectly Phrased
        </div>
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }) => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const handleSignInButtonClick = () => {
    setSignIn(true);
  };

  const handleSignInModalClose = () => {
    setSignIn(false);
  };

  const handleSignUpButtonClick = () => {
    setSignUp(true);
  };

  const handleSignUpModalClose = () => {
    setSignUp(false);
  };

  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full z-0 font-openSansRegular",
        className
      )}
    >
      <div className="relative flex w-full min-h-screen flex-1 scale-y-125 items-center justify-center isolate z-0 mt-48 md:mt-0">
        <motion.div
          initial={{ opacity: 0.5, width: "20vw", minWidth: "70px" }}
          whileInView={{ opacity: 1, width: "40vw", minWidth: "150px" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible bg-gradient-conic from-cyan-500 
          via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "20vw", minWidth: "70px" }}
          whileInView={{ opacity: 1, width: "40vw", minWidth: "150px" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 bg-gradient-conic from-transparent 
          via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28vw] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "10vw", minWidth: "70px" }}
          whileInView={{ width: "20vw", minWidth: "100px" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 -translate-y-[6vw] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "20vw", minWidth: "70px" }}
          whileInView={{ width: "40vw", minWidth: "150px" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex inset-auto z-50 h-0.5 -translate-y-[7rem] bg-cyan-400"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button
            className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
            onClick={handleSignUpButtonClick}
          >
            Join now
          </button>
          {signUp && <SignUp onClose={handleSignUpModalClose} />}
          <button
            className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm"
            onClick={handleSignInButtonClick}
          >
            Sign In
          </button>
          {signIn && <LoginScreen onClose={handleSignInModalClose} />}
        </div>
      </div>
    </div>
  );
};
