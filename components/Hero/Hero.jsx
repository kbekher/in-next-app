"use client";

import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "next-i18next";

import { DOMAIN } from "@/constants";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import SayHello from "../SayHello/SayHello";
import LangToggle from "../LangToggle/LangToggle";
import Preloader from "../Preloader/Preloader";


const Hero = () => {
  const { t } = useTranslation("common");
  const videoRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  const [isDesktop, setIsDesktop] = useState(false);
  const isDesktopQuery = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    setIsDesktop(isDesktopQuery);

    if (videoRef.current) {
      // Set the playback rate to 0.5x (half speed)
      videoRef.current.playbackRate = 0.5;
    }

    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the preloader once the scene is loaded
    }, 2000);

    return timer;
  }, [isDesktopQuery]);

  return (
    <header className='relative h-[100vh] w-full flex flex-col pt-[60px] px-5 pb-[36px] md:pt-10 md:px-20 md:pb-[70px]'>

      {isLoading && (
        <div className="absolute inset-0 z-[9999] bg-[var(--background)] flex justify-center items-center">
          <Preloader />
        </div>
      )}

      <div className='absolute inset-0 z-[-1]'>
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay 
          muted 
          loop 
        >
          <source src={`${DOMAIN}spline-bg.webm`} type="video/webm" />
          <source src={`${DOMAIN}spline-bg.mp4`} type="video/mp4" /> //TODO: doesn't work in Safari
          Your browser does not support the video tag.
        </video>
      </div>

      <Header />

      <div className='flex flex-col md:flex-row md:items-end justify-between flex-1 mt-5 md:mt-0'>
        <h1 className='md:max-w-[490px] text-[40px] leading-[normal] md:text-5xl select-none'>
          {t("h1")}
        </h1>

        <div className='flex flex-wrap gap-3 md:block left-1/2 -translate-x-1/2 w-full md:left-auto md:-translate-x-0 w-full md:max-w-max fixed bottom-9 md:static box-border z-[48] md:z-auto'>

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
    </header>
  )
};

export default Hero;
