"use client";

import { useContext, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { scrollFadeIn } from "@/utils/motion";

import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import SayHello from "../SayHello/SayHello";
import LangToggle from "../LangToggle/LangToggle";
import HeaderBg from "./HeaderBg";
import HeaderTitle from "./HeaderTitle";
import { HeaderContext } from "@/context/HeaderContext";

// TODO: make mobile and desktop one component

const HeaderDesktop = () => {
  const { isShrunk, scrollDirection } = useContext(HeaderContext);

  // Animate projects on scroll
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref, // Target element to monitor
  //   offset: ["start end", "end start"], // Defines when the element is in view
  // });
  // // const scaleY = useSpring(scrollYProgress);

  // // Create a transformation based on scroll progress
  // const height = useTransform(scrollYProgress, [0, 1], ["100%", "10%"]);
  // const width = useTransform(scrollYProgress, [0, 1], ["100%", "90%"]);
  // const translateY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween", ease: "easeInOut", duration: 1.75 }}
      className="relative w-full h-full flex justify-center items-center"
    >

      <motion.div
        // style={{ height, width, translateY }}
        layout
        initial={{ height: "100vh", width: "100vw", transform: "translateY(0px)" }}
        animate={{
          height: isShrunk ? "80px" : "100vh",
          width: isShrunk ? "calc(100vw - 160px)" : "100vw",
          transform: isShrunk ? "translateY(40px)" : "translateY(0px)",
        }}
        transition={{ type: "spring", duration: 1.5, stiffness: 150, damping: 20 }}
        className='w-full h-full fixed top-0'
      >
        {/* TODO: motion.div layout */}
        <div className={`relative h-full w-full flex flex-col ${isShrunk ? 'py-4 pl-[50px] pr-[28px]' : 'pt-10 pb-[70px] px-20'}`}>

          <HeaderBg url='web-bg.webm' />

          <div className='flex w-full justify-between items-center'>
            <Logo isClickable />
            <Navbar />
            <SayHello />
          </div>

          <motion.div layout className={isShrunk ? 'hidden' : 'flex flex-row items-end justify-between flex-1'}>

            <HeaderTitle />

            <div>
              <motion.div {...scrollFadeIn(isShrunk, scrollDirection)} className='flex-grow'>
                <LangToggle />
              </motion.div>
            </div>

          </motion.div>
        </div>
      </motion.div>

    </motion.div>
  )
};

export default HeaderDesktop;