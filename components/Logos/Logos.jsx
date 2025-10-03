import React from 'react';
import Image from 'next/image';

import SectionWrapper from '@/hoc/SectionWrapper';
import { DOMAIN, logos } from '@/constants';
import imageLoader from '@/utils/image-loader';

const Logos = () => {
  return (
    <div className='border-t border-[var(--color-gray-border)] pt-[22px]'>
      <div className='grid grid-cols-4 gap-4 md:flex md:gap-4 md:justify-between'>
        {logos.map((logo) => (
          <div key={logo} className='aspect-square flex items-center justify-center md:flex-1'>
            <Image
              src={`${DOMAIN}/logos/${logo}.png`}
              alt={logo}
              width={80}
              height={80}
              loader={imageLoader}
              className="object-contain w-auto h-[24px] md:h-[30px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Logos, "logos");
// export default Logos;
