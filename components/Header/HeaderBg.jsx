import React from 'react';
import Image from 'next/image';

import { DOMAIN } from "@/constants";

const HeaderBg = ({ url, type, isShrunk }) => {

  return (
    <div className='absolute inset-0 z-[-1]'>
      <video
        src={`${DOMAIN}${url}`}
        className={`object-cover w-full h-full transition-all duration-300 ${isShrunk ? "rounded-[54px]" : "rounded-0"}`}
        // height={100}
        // width={100}
        // priority
        // fill={true}
        // alt={'gradient bg'}
        // unoptimized
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={`${DOMAIN}${url}`} type={type} />
      </video>
    </div>
  );
}

export default HeaderBg;

