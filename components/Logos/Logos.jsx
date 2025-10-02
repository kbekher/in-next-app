import React from 'react';
import Image from 'next/image';

import SectionWrapper from '@/hoc/SectionWrapper';
import { DOMAIN, logos } from '@/constants';
import imageLoader from '@/utils/image-loader';

const Logos = () => {
  return (
    <section className='pt-6'>
      {/* Mobile: 4x3 Grid */}
      <div className='md:hidden'>
        <div className='grid grid-cols-4 gap-4'>
          {logos.map((logo) => (
            <div key={logo} className='aspect-square flex items-center justify-center p-2'>
              <Image
                src={`${DOMAIN}/logos/${logo}.png`}
                alt={logo}
                width={60}
                height={60}
                loader={imageLoader}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Single Line */}
      <div className='hidden md:flex md:gap-4 md:justify-between'>
        {logos.map((logo) => (
          <div key={logo} className='flex-1 aspect-square flex items-center justify-center p-4'>
            <Image
              src={`${DOMAIN}/logos/${logo}.png`}
              alt={logo}
              width={80}
              height={80}
              loader={imageLoader}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

// export default SectionWrapper(Logos, "logos");
export default Logos;
