"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "next-i18next";
import Script from 'next/script';
import Spline from "@splinetool/react-spline";

import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import SayHello from "../SayHello/SayHello";
import LangToggle from "../LangToggle/LangToggle";
import Preloader from "../Preloader/Preloader";

const Hero = () => {
  const { t } = useTranslation("common");

  const [isLoading, setIsLoading] = useState(true);

  const [isMobile, setIsMobile] = useState(false);
  const isMobilepQuery = useMediaQuery({ maxWidth: 768 });

  // https://prod.spline.design/liDjqaY-i3BfRC2o/scene.splinecode
  const splineSrc = "https://prod.spline.design/xDqJelryf2jxk8Gz/scene.splinecode";

  useEffect(() => {
    setIsMobile(isMobilepQuery);
  }, [isMobilepQuery]);

  const handleSceneLoaded = () => {
    setIsLoading(false); // Hide the preloader once the scene is loaded
  };

  return (
    <header className='relative h-[100vh] w-full flex flex-col pt-[60px] px-5 pb-[36px] md:pt-10 md:px-20 md:pb-[70px]'>

      {/* Preload Spline Object */}
      <Script src={splineSrc} strategy="afterInteractive" />

      {isLoading && (
        <div className="absolute inset-0 z-[9999] bg-black bg-opacity-50 flex justify-center items-center">
          <Preloader />
        </div>
      )}

      <div className='absolute inset-0 z-[-1]'>
        <Spline
          scene={splineSrc}
          onLoad={handleSceneLoaded}
        />
      </div>

      <Header />

      <div className='flex flex-col md:flex-row md:items-end justify-between flex-1'>
        <h1 className='md:max-w-[490px] text-4xl md:text-5xl select-none'>
          {t("h1")}
        </h1>

        <div className='flex flex-wrap gap-3 md:block left-1/2 -translate-x-1/2 w-full md:left-auto md:-translate-x-0 w-full md:max-w-max fixed bottom-9 md:static box-border z-[48] md:z-auto'>
          
          {isMobile && (
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
  );
};

export default Hero;
