"use client";

import { useTranslation } from "next-i18next";
import Image from "next/image";
import { motion } from "framer-motion";

import { DOMAIN, reviews } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";
import SectionWrapper from "@/hoc/SectionWrapper";

import BlurText from "../BlurText/BlurText";

const ReviewCard = ({ review, t, index }) => (
  <motion.div
    {...fadeIn(index === 0 ? "right" : "left", "spring", 0.5, 0.75)}
    className='bg-[var(--color-bg-tile)] rounded-[70px] md:col-span-6'
  >
    <div className='flex flex-col items-center w-full h-full p-8 md:p-[40px] pt-4 md:pt-8 pb-[40px] text-justify'>
      <div className='w-[100px] h-[100px] bg-[var(--color-gray)] rounded-full overflow-hidden aspect-square'>
        <Image
          src={`${DOMAIN}${review.imgUrl}`}
          alt={t(`testimonials.review${review.id}.name`)}
          width={100}
          height={100}
          className='object-cover'
          //  sizes="(max-width: 1200px) 100vw, (max-width: 1200px) 50vw, 33vw" //TODO:
        />
      </div>
      <h4 className="mt-4">
        <BlurText text={t(`testimonials.review${review.id}.name`)} index={index} />
      </h4>
      <div className="mt-2 md:mt-8" >
        <BlurText text={t(`testimonials.review${review.id}.p`)} index={index} />
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const { t } = useTranslation("common");

  return (
    <section className='max-w-1680 mx-auto h-full pt-[146px]'>
      <div className='px-5 md:px-[80px] mb-[120px]'>
        <motion.h2
          {...textVariant("down")}
          className='max-w-[552px] mx-auto section-title mb-4 md:mb-[44px] text-center'
        >
          {t("testimonials.title")}
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4'>
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} t={t} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Testimonials, "testimonials");
