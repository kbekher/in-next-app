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

const Hero = () => {
  const { t } = useTranslation("common");

  const [isDesktop, setIsDesktop] = useState(false);
  const isDesktopQuery = useMediaQuery({ minWidth: 768 });

  //TODO: make dinamic for Mobile & Desktop
  const splineSrc = "https://prod.spline.design/liDjqaY-i3BfRC2o/scene.splinecode";

  useEffect(() => {
    setIsDesktop(isDesktopQuery);
  }, [isDesktopQuery]);

  return (
    <header className='relative h-[100vh] w-full flex flex-col pt-[60px] px-5 pb-[36px] md:pt-10 md:px-20 md:pb-[70px]'>

    {/* Preload Spline Object */}
    <Script src={splineSrc} strategy="beforeInteractive" />

      {/* Background Spline Object */}
      <div className='absolute inset-0 z-[-1]'>
        <Spline 
          scene={splineSrc} 
          // onLoad={handleSceneLoaded} 
        />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className='flex flex-col md:flex-row md:items-end justify-between flex-1'>
        <h1 className='md:max-w-[490px] text-4xl md:text-5xl select-none'>
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
  );
};

export default Hero;
