"use client";

import { useState, useEffect, useRef } from "react";
import throttle from 'lodash/throttle';
import { motion, useScroll } from "framer-motion";

import { scrollFadeIn } from "@/utils/motion";

import SectionWrapper from "@/hoc/SectionWrapper";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import SayHello from "../SayHello/SayHello";
import LangToggle from "../LangToggle/LangToggle";
import HeaderBg from "./HeaderBg";
import HeaderTitle from "./HeaderTitle";

const HeaderDesktop = () => {
  const { scrollY } = useScroll();

  const [isShrunk, setIsShrunk] = useState(false);
  const [threshold, setThreshold] = useState(0);

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);

  // Ensure threshold is calculated in the browser
  useEffect(() => {
    if (typeof window !== "undefined") {
      setThreshold(window.innerHeight / 3);
    }
  }, []);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const isScrollingDown = scrollY.current > lastScrollY.current;
      if (isScrollingDown) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      // Check if scroll position crosses the threshold
      if (scrollY.current > threshold && !isShrunk) {
        setIsShrunk(true);
      } else if (scrollY.current <= threshold && isShrunk) {
        setIsShrunk(false);
      }

      lastScrollY.current = scrollY.current;
    }, 200);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isShrunk, threshold, scrollY.current]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween", ease: "easeInOut", duration: 1.75 }}
      className={`relative w-full h-screen flex justify-center items-center`}
    >

      <motion.div
        layout
        initial={{ height: "100vh", width: "100vw", transform: "translateY(0px)" }}
        animate={{
          height: isShrunk ? "80px" : "100vh",
          width: isShrunk ? "calc(100vw - 160px)" : "100vw",
          transform: isShrunk ? "translateY(40px)" : "translateY(0px)",
        }}
        transition={{ type: "spring", duration: 1.5, stiffness: 150, damping: 20 }}
        className='h-full fixed top-0'
      >

        <div className={`relative h-full w-full flex flex-col ${isShrunk ? 'py-4 pl-[50px] pr-[28px]' : 'pt-10 pb-[70px] px-20'}`}>

          <HeaderBg url='web-bg.webm' isShrunk={isShrunk} />

          <div className='flex w-full justify-between items-center'>
            <Logo isClickable isShrunk={isShrunk} />
            <Navbar isShrunk={isShrunk} />
            <SayHello />
          </div>

          <div className='flex flex-row items-end justify-between flex-1'>

            <HeaderTitle isShrunk={isShrunk} isScrollingDown={isScrollingDown} />

            <div>
              <motion.div {...scrollFadeIn(isShrunk, isScrollingDown)} className='flex-grow'>
                <LangToggle />
              </motion.div>
            </div>

          </div>
        </div>
      </motion.div>

    </motion.header>
  )
};

export default SectionWrapper(HeaderDesktop, "headerDesktop");