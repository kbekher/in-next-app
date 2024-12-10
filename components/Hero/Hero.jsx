"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
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
  const [isDesktop, setIsDesktop] = useState(false);
  const isDesktopQuery = useMediaQuery({ minWidth: 768 });

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false); // Hide the preloader once the scene is loaded
  //   }, 2000);

  //   // Return a cleanup function to clear the timeout
  //   return () => clearTimeout(timer);
  // }, []);

  const handleBgLoad = () => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Reset overflow
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  useEffect(() => {
    setIsDesktop(isDesktopQuery);
  }, [isDesktopQuery]);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };
    const throttledScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledScroll);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  useEffect(() => {
    const cleanup = handleBgLoad();
    return cleanup;
  }, []);

  return (
    <header
      className={`fixed t-0 transition-all duration-300 ${
        isShrunk ? 'w-[calc(100%-40px)] md:w-[calc(100%-160px)] h-[44px] md:h-[72px] mt-[64px] md:mt-[40px] mx-[20px] md:mx-[80px]' 
        : 'w-full h-full mt-0 mx-0'
      }`}
    >
      <div className={`relative h-full w-full flex flex-col ${isShrunk ? 'py-1 md:py-4 pl-[32px] md:pl-[50px] md:pr-[28px]' : 'pt-[60px] md:pt-10 pb-[36px] md:pb-[70px] px-5 md:px-20'}`}>

        {isLoading && (
          <div className="absolute inset-0 z-[9999] bg-black flex justify-center items-center">
            <Preloader />
          </div>
        )}

        <div className='absolute inset-0 z-[-1]'>
          <Image
            src={`${DOMAIN}bg.gif`}
            className={`w-full h-full transition-all duration-300 ${isShrunk ? 'rounded-[54px]' : ''}`}
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

        <div className={`${isShrunk && isDesktop ? 'opacity-0' : ''} transition-all duration-200 flex flex-col md:flex-row md:items-end justify-between flex-1 mt-5 md:mt-0`}>
          <h1
            className={`md:max-w-[490px] text-[40px] leading-[normal] md:text-5xl select-none transition-all duration-200 ${isShrunk ? 'opacity-0' : ''}`}
          >
            {t("h1")}
          </h1>

          <div className='flex flex-wrap gap-3 md:block left-1/2 -translate-x-1/2 w-full md:left-auto md:-translate-x-0 w-full md:max-w-max fixed bottom-9 md:static box-border'>

            {!isDesktop && (
              <>
                <div className='md:hidden basis-full'>
                  <Navbar />
                </div>

                <div className='md:hidden flex-grow flex justify-end'>
                  <SayHello />
                </div>
              </>
            )}

              <div className='flex-grow'>
                <LangToggle />
              </div>

          </div>

        </div>
      </div>
    </header>
  )
};

export default Hero;
