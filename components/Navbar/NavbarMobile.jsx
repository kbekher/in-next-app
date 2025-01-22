import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { navLinks } from '@/constants';

import SayHello from '../SayHello/SayHello';
import LangToggle from '../LangToggle/LangToggle';

const NavbarMobile = () => {
  const { t } = useTranslation("common");
  return (
    <div className='md:hidden z-[48] fixed bottom-9 w-full box-border flex flex-wrap gap-3 left-1/2 -translate-x-1/2'>

      <div className='basis-full'>
        <nav>
          <ul className='flex justify-center flex-wrap gap-3'>
            {navLinks.map((navLink) => (
              <li className='btn' key={navLink.id}>
                <Link href={`#${navLink.id}`}>{t(`nav.${navLink.id}`)}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='flex-grow flex justify-end'>
        <SayHello />
      </div>

      <div className='flex-grow'>
        <LangToggle />
      </div>

    </div>
  );
}

export default NavbarMobile;
