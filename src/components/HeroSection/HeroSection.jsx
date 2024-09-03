'use client';

import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SayHello from '../SayHello/SayHello';

const HeroSection = () => {
  // Local state to track whether it's a desktop
  const [isDesktop, setIsDesktop] = useState(false);

  // Only run the media query on the client side
  const isDesktopQuery = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    // Set the state after the component mounts
    setIsDesktop(isDesktopQuery);
  }, [isDesktopQuery]);

  return (
    <div className='relative h-[100vh] w-full flex flex-col pt-[60px] px-5 pb-[36px] md:pt-10 md:px-20 md:pb-[70px]'>
      {/* Background Spline Object */}
      <div className='absolute inset-0 z-[-1]'>
        <Spline scene='https://prod.spline.design/liDjqaY-i3BfRC2o/scene.splinecode' />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className='flex flex-col md:flex-row md:items-end justify-between flex-1'>
        <h1 className='md:max-w-[490px] text-4xl md:text-5xl font-bold text-white'>
          Creating Visual Solutions that Inspire the World
        </h1>

        <div className='flex flex-wrap gap-3 md:block w-full md:max-w-max fixed bottom-9 left-[50%] -translate-x-1/2 md:static box-border'>

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
            Language Toggle
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
