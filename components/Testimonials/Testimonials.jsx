'use client';

import { useTranslation } from "next-i18next";
import Image from "next/image";

const REVIEWS = [
  { id: 1 },
  { id: 2 }
];

const Testimonials = () => {
  const { t } = useTranslation("common");

  return (
    <section className='max-w-[1680px] m-auto h-full pt-[160px]'>
      <div className='px-5 md:px-[80px] mb-[120px]'>
        <h2 className='max-w-[540px] m-auto text-[36px] md:text-[48px] leading-tight mb-[54px] text-center'>
          {t("testimonials.title")}
        </h2>

        <div className='grid grid-cols-2 grid-rows-1 gap-3 auto-rows-min justify-center p-0 relative w-full'>
          {REVIEWS.map((reviw) => (
            <div
              key={reviw.id}
              className='bg-[var(--color-bg-tile)] rounded-[43px]'
            >
              <div className='flex flex-col items-center gap-4 w-full h-full p-[40px] pt-[30px]'>
                <div className='w-[100px] h-[100px] bg-[var(--color-gray)] rounded-[50%] overflow-hidden aspect-square'>
                  <Image
                    src={`https://inozemtsev-portfolio.s3.eu-central-1.amazonaws.com/reviewer${reviw.id}.jpg`}
                    alt={reviw}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>

                  <h4>{t(`testimonials.review${reviw.id}.name`)}</h4>
                  <p>{t(`testimonials.review${reviw.id}.p`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
