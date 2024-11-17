import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useMediaQuery } from 'react-responsive';
import { DOMAIN, illustrations } from "@/constants";
import Divider from "../Divider/Divider";

const positions = {
  fatboy: "top-0 left-0",
  people: "top-0 right-0",
  grinch: "bottom-0 left-0",
  books: "bottom-[-40px] right-10",
  christmas: "hidden lg:block top-10 left-[280px]",
};

const IllustrationImage = ({ name, behanceUrl, size = 200 }) => {
  const imageElement = (
    <Image
      width={size}
      height={size}
      className={`h-full md:h-auto w-full md:w-auto rounded-3xl object-cover ${!behanceUrl ? `md:absolute ${positions[name]}` : ''}`}
      src={`${DOMAIN}${name}.jpg`}
      alt={name}
    />
  );

  return behanceUrl ? (
    <Link href={behanceUrl} className={`md:absolute ${positions[name]}`}>
      {imageElement}
    </Link>
  ) : imageElement;
};


const Illustrations = () => {
  const { t } = useTranslation("common");
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className='max-w-[1300px] m-auto h-full pt-[130px] md:pt-[220px]'>

      <div className='px-5 md:px-[40px] mb-[120px]'>

        {isMobile ? (
          <div className="flex flex-col gap-8">
            <div className='flex justify-between gap-2 max-h-[135px]'>
              {illustrations.slice(0, 2).map((item, index) => (
                <div key={item.name} className="h-auto max-h-[135px]">
                  <IllustrationImage {...item} />
                </div>
              ))}
            </div>

            <div className='max-w-[540px] m-auto'>
              <h2 className='text-[36px] md:text-[48px] leading-tight mb-6 md:mb-8 text-center'>
                {t('illustrations.title')}
              </h2>
              <p className='text-center text-[16px] md:text-[14px]'>{t('illustrations.p')}</p>
            </div>

            <div className='flex justify-between gap-2 max-h-[180px]'>
              {illustrations.slice(2, 4).map(item => (
                <div key={item.name} className="h-auto max-h-[180px]">
                  <IllustrationImage {...item} />
                </div>
              ))}
            </div>
          </div>
        ) : (

          <div className='relative min-h-[640px] w-full h-full flex items-center'>
            {illustrations.map(item => (
              <IllustrationImage key={item.name} {...item} />
            ))}

            <div className='max-w-[540px] m-auto'>
              <h2 className='text-[36px] md:text-[48px] leading-tight mb-6 md:mb-8 text-center'>
                {t('illustrations.title')}
              </h2>
              <p className='text-center text-[16px] md:text-[14px]'>{t('illustrations.p')}</p>
            </div>
          </div>
        )}

      </div>

      <Divider />
    </section>
  );
}

export default Illustrations
