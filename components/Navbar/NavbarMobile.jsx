import React from 'react';
import { useTranslation } from 'react-i18next';

import Menu from '../Menu/Menu';
import LangToggle from '../LangToggle/LangToggle';

const NavbarMobile = () => {
  const { t } = useTranslation("common");
  return (
    <div className='md:hidden z-[48] fixed bottom-0 w-full px-5 py-8 mix-blend-difference text-[var(--color-white)]'>
      <div className=' flex justify-between'>
        <LangToggle />
        <Menu />
      </div>
    </div>
  );
}

export default NavbarMobile;
