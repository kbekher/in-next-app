import React from 'react';
import Image from 'next/image';

import { DOMAIN } from "@/constants";

const HeaderBg = ({ url, handleBgLoad, isShrunk }) => {

  return (
    <div className='absolute inset-0 z-[-1]'>
      <Image
        src={`${DOMAIN}${url}.gif`}
        className={`w-full h-full transition-all duration-300 ${isShrunk ? "rounded-[54px]" : "rounded-0"}`}
        // height={100}
        // width={100}
        fill={true}
        alt={'gradient bg'}
        unoptimized
        onLoad={handleBgLoad}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

export default HeaderBg;
