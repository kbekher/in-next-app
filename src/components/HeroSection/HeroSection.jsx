'use client';

import Spline from '@splinetool/react-spline';
import { useMediaQuery } from 'react-responsive';

import Header from '../Header/Header';

const HeroSection = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

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

        <div className='max-w-max ml-auto'>
        {/* <div> */}
        {/* {!isDesktop && <Navbar />} */}

          Language Toggle
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
