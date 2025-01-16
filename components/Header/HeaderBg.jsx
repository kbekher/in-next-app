import React, { useContext } from 'react';

import { DOMAIN } from "@/constants";
import { HeaderContext } from '@/context/HeaderContext';

const HeaderBg = ({ url }) => {
  const { isShrunk } = useContext(HeaderContext);

  return (
    <div className='absolute inset-0 z-[-1]'>
      <video
        src={`${DOMAIN}${url}`}
        className={`object-cover w-full h-full transition-all duration-300 ${isShrunk ? "rounded-[54px]" : "rounded-0"}`}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}

export default HeaderBg;

