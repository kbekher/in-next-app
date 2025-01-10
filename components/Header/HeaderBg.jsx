import React from 'react';
import Image from 'next/image';

import { DOMAIN } from "@/constants";

const HeaderBg = ({ url, isShrunk }) => {

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

