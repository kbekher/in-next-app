"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import throttle from 'lodash/throttle';

import { DOMAIN } from "@/constants";

import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import SayHello from "../SayHello/SayHello";
import LangToggle from "../LangToggle/LangToggle";
import Preloader from "../Preloader/Preloader";

const Hero = () => {
  const { t } = useTranslation("common");

  const [isLoading, setIsLoading] = useState(true);
  const [isShrunk, setIsShrunk] = useState(false);

  const scrollAnimationRef = useRef(null);
  const scrollBarRef = useRef(null);
  const imageAnimationRef = useRef(null);

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

  function getPercentageScrolled(element) {
    const distanceScrolled = window.scrollY - element.offsetTop;
    const percentageScrolled = Math.round(distanceScrolled / (element.offsetHeight / 100));
    return Math.min(100, Math.max(0, percentageScrolled));
  }


  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollAnimation = scrollAnimationRef.current;
      const scrollBar = scrollBarRef.current;
      const imageAnimation = imageAnimationRef.current;

      if (!scrollAnimation || !scrollBar || !imageAnimation) return;

      const percentageScrolled = getPercentageScrolled(scrollAnimation);

      const maxWidth = window.innerWidth; 
      const isMobile = maxWidth < 768; 

      const minHeight = isMobile ? 46 : 72; 
      const maxHeight = window.innerHeight; 
      const height = Math.max(
        minHeight,
        maxHeight - (percentageScrolled / 100) * (maxHeight - minHeight)
      );
      scrollBar.style.height = `${height}px`;

      const minWidth = maxWidth - (isMobile ? 40 : 160);

      const width = Math.max(
        minWidth,
        maxWidth - (percentageScrolled / 100) * (maxWidth - minWidth)
      );
      scrollBar.style.width = `${width}px`;

      // Move the element's top position up to a max of 40px
      const topPosition = Math.min(40, percentageScrolled / 2);
      scrollBar.style.top = `${topPosition}px`;

      const borderRadius = percentageScrolled === 0 ? "0px" : "54px";
      imageAnimation.style.borderRadius = borderRadius;

      setIsShrunk(window.scrollY !== 0);
    }, 300)

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    const cleanup = handleBgLoad();
    return cleanup;
  }, []);


  if (isLoading) {
    return (
      <div className="absolute inset-0 z-[9999] bg-black flex justify-center items-center">
        <Preloader />
      </div>
    )
  }

  return (
    <header
      className={`scroll-animation relative w-full h-screen flex justify-center items-center`}
      ref={scrollAnimationRef}
    >

      <div 
        className="scroll-bar w-full h-full fixed t-0 transition-all duration-300"
        ref={scrollBarRef} 
      >

      <div className={`relative h-full w-full flex flex-col ${isShrunk ? 'py-1 md:py-4 pl-[32px] md:pl-[50px] md:pr-[28px]' : 'pt-[60px] md:pt-10 pb-[36px] md:pb-[70px] px-5 md:px-20'}`}>

        <div className='absolute inset-0 z-[-1]'>
          <Image
            ref={imageAnimationRef}
            src={`${DOMAIN}bg.gif`}
            className={`w-full h-full transition-all duration-300`}
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

        <div className='transition-all duration-300 flex flex-col md:flex-row md:items-end justify-between flex-1 mt-5 md:mt-0'>

          <div className="message-animation">
            <h1
              className={`message-text md:max-w-[490px] text-[40px] leading-[normal] md:text-5xl select-none transition-all duration-300 opacity-1 ${isShrunk ? 'opacity-0' : ''}`}
            >
              {t("h1")}
            </h1>
          </div>

          <div className='flex flex-wrap gap-3 md:block left-1/2 -translate-x-1/2 w-full md:left-auto md:-translate-x-0 w-full md:max-w-max fixed bottom-9 md:static box-border'>

              <>
                <div className='md:hidden basis-full'>
                  <Navbar />
                </div>

                <div className='md:hidden flex-grow flex justify-end'>
                  <SayHello />
                </div>
              </>

            <div className={`flex-grow opacity-1 transition-all duration-300 ${isShrunk ? 'md:opacity-0' : ''}`}>
              <LangToggle />
            </div>

          </div>

        </div>
      </div>
      </div>

    </header>
  )
};

export default Hero;
