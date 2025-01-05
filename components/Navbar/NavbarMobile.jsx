import React from 'react';
import Navbar from './Navbar';
import SayHello from '../SayHello/SayHello';
import LangToggle from '../LangToggle/LangToggle';

const NavbarMobile = () => {
  return (
    <div className='md:hidden z-[48] fixed bottom-9 w-full box-border flex flex-wrap gap-3 left-1/2 -translate-x-1/2'>

      <div className='basis-full'>
        <Navbar />
      </div>

      <div className='flex-grow flex justify-end'>
        <SayHello />
      </div>

      <div className='flex-grow'>
        <LangToggle />
      </div>

    </div>
  )
}

export default NavbarMobile;
