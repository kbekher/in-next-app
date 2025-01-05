"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import throttle from 'lodash/throttle';
import { motion, useScroll } from "framer-motion";

import { DOMAIN } from "@/constants";
import { scrollFadeIn } from "@/utils/motion";

import Header from "../Header/Header";
import LangToggle from "../LangToggle/LangToggle";
import Preloader from "../Preloader/Preloader";
import SectionWrapper from "@/hoc/SectionWrapper";

const Hero = () => {
  const { t } = useTranslation("common");
  const { scrollY } = useScroll();

  const [isLoading, setIsLoading] = useState(true);
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

  const handleBgLoad = () => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    const overflowValue = isLoading ? "hidden" : "";
    document.documentElement.style.overflow = overflowValue;
    document.body.style.overflow = overflowValue;

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isLoading]);

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

  useEffect(() => {
    const cleanup = handleBgLoad();
    return cleanup;
  }, []);

  if (isLoading) {
    return (
      <div className="absolute inset-0 z-[9999] bg-[var(--background)] flex justify-center items-center">
        <Preloader />
      </div>
    )
  }

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween", ease: "easeInOut", duration: 1.75 }}
      className={`relative w-full h-screen flex justify-center items-center`}
    >

      <motion.div
        initial={{ height: "100vh", transform: "translateY(0px)" }}
        animate={{
          height: isShrunk ? "80px" : "100vh",
          transform: isShrunk ? "translateY(40px)" : "translateY(0px)",
        }}
        transition={{ type: "spring", duration: 1.5 }} //stiffness: 100, dumpimg: 10,
        className={`h-full fixed top-0 transition-all duration-300 ${isShrunk ? "md:w-[calc(100vw-160px)] md:w-[calc(100vw-80px)]" : "w-full"}`}
      >

        <div className={`relative h-full w-full flex flex-col ${isShrunk ? 'py-1 md:py-4 pl-[32px] md:pl-[50px] md:pr-[28px]' : 'pt-[60px] md:pt-10 pb-[36px] md:pb-[70px] px-5 md:px-20'}`}>

          <div className='absolute inset-0 z-[-1]'>
            <Image
              src={`${DOMAIN}bg.gif`}
              className={`w-full h-full transition-all duration-300 ${isShrunk ? "rounded-[54px]" : "rounded-0"}`}
              // height={100}
              // width={100}
              fill={true}
              alt={'gradient bg'}
              unoptimized
              onLoad={handleBgLoad}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <Header isShrunk={isShrunk} />

          <div className='flex flex-col md:flex-row md:items-end justify-between flex-1 mt-5 md:mt-0'>

            <motion.h1
              {...scrollFadeIn(isShrunk, isScrollingDown)}
              className='md:max-w-[490px] text-[40px] leading-[normal] md:text-5xl select-none'
            >
              {t("h1")}
            </motion.h1>

            <div className='hidden md:block'>
              <motion.div {...scrollFadeIn(isShrunk, isScrollingDown)} className='flex-grow hidden md:block'>
                <LangToggle />
              </motion.div>
            </div>

          </div>
        </div>
      </motion.div>

    </motion.header>
  )
};

export default SectionWrapper(Hero, "hero");
