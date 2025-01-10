"use client";

import { useState, useEffect, useRef } from "react";
import throttle from 'lodash/throttle';
import { motion, useScroll } from "framer-motion";

import SectionWrapper from "@/hoc/SectionWrapper";
import Logo from "../Logo/Logo";
import HeaderBg from "./HeaderBg";
import HeaderTitle from "./HeaderTitle";

const HeaderMobile = () => {

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
          height: isShrunk ? "46px" : "100vh",
          width: isShrunk ? "calc(100vw - 40px)" : "100vw",
          transform: isShrunk ? "translateY(40px)" : "translateY(0px)",
        }}
        transition={{ type: "spring", duration: 3.5, stiffness: 200, damping: 40 }}
        className='h-full fixed top-0'
      >

        <div className={`relative h-full w-full flex flex-col ${isShrunk ? 'py-1 pl-[32px]' : 'pt-[60px] pb-[36px] px-5 '}`}>

          <HeaderBg url='mobile-bg' isShrunk={isShrunk} />

          <div className='flex w-full justify-between items-center '>
            <Logo isClickable isShrunk={isShrunk} />
          </div>

          <div className='flex flex-col md:flex-row md:items-end justify-between flex-1 mt-5 md:mt-0'>
            <HeaderTitle isShrunk={isShrunk} isScrollingDown={isScrollingDown} />
          </div>

        </div>
      </motion.div>

    </motion.header>
  )
};

export default SectionWrapper(HeaderMobile, "headerMobile");