import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { fadeIn } from '@/utils/motion';
import { DOMAIN } from "@/constants";

export const ProjectGallery = ({ name, assets }) => {
  const imgClass = 'w-full h-full rounded-[var(--border-radius)]';

  const gridConfig = useMemo(
    () => ({
      flowtech: {
        container: 'max-h-[218px] md:max-h-[366px] grid grid-cols-3 md:grid-cols-8 grid-rows-2 md:grid-rows-6 gap-3 md:gap-4',
        items: [
          { src: assets[3], wrapperClass: 'col-start-1 row-start-1 col-span-2 md:col-span-5 row-span-2' },
          { src: assets[5], wrapperClass: 'hidden md:block col-start-1 col-span-3 row-start-3 row-span-2', extraClass: 'object-contain bg-[#373A39]' },
          { src: assets[4], wrapperClass: 'hidden md:block col-start-1 col-span-3 row-start-5 row-span-2', extraClass: ' object-contain bg-[#D9D9D9]' },
          { src: assets[2], wrapperClass: 'hidden md:block col-span-3 row-span-3' },
          { src: assets[0], wrapperClass: 'col-start-3 md:col-start-6 row-start-1 col-span-1 md:col-span-3 row-span-1 md:row-span-3' },
          { src: assets[1], wrapperClass: 'col-start-3 md:col-start-4 col-span-1 md:col-span-2 row-start-2 md:row-start-3 row-span-1 md:row-span-4' },
        ],
      },
      paysera: {
        container: 'max-h-[274px] md:max-h-[416px] grid grid-cols-2 md:grid-cols-8 grid-rows-4 md:[grid-template-rows:1fr_169px_1fr] gap-3 md:gap-4',
        items: [
          { src: assets[1], wrapperClass: 'col-start-1 row-start-1 md:col-span-4' },
          { src: assets[4], wrapperClass: 'col-start-1 row-start-2 md:col-span-3', extraClass: ' object-contain bg-black' },
          { src: assets[5], wrapperClass: 'hidden md:block col-start-1 row-start-3 col-span-5', extraClass: 'object-contain bg-white' },
          { src: assets[0], wrapperClass: 'row-start-3 md:row-start-1 md:col-span-4 row-span-2 md:row-span-1' },
          { src: assets[2], wrapperClass: 'md:col-start-6 md:col-span-3 row-span-3 md:row-span-2' },
          { src: assets[3], wrapperClass: 'md:row-start-2 md:col-start-4 md:col-span-2', extraClass: 'object-contain bg-white' },
        ],
      },
    }),
    [assets]
  );

  const { container, items } = gridConfig[name] || {};

  return (
    <div className={container}>
      {items.map(({ src, wrapperClass, extraClass }, i) => (
        <motion.div
          {...fadeIn(i < 3 ? "right" : "left", "spring", 0.5, 0.75)}
          key={src} 
          className={`h-auto ${wrapperClass}`}
        >
          <Image
            width={200}
            height={200}
            className={`${imgClass} ${extraClass || 'object-cover'}`}
            src={`${DOMAIN}${src}`}
            alt=""
            //  sizes="(max-width: 1200px) 100vw, (max-width: 1200px) 50vw, 33vw" //TODO:
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGallery;
