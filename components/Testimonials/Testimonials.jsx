import { useTranslation } from "next-i18next";
import Image from "next/image";

import { DOMAIN, reviews } from "@/constants";

const ReviewCard = ({ review, t }) => (
  <div className='bg-[var(--color-bg-tile)] rounded-[70px] md:col-span-6'>
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
      <h4 className="mt-4">{t(`testimonials.review${review.id}.name`)}</h4>
      <p className="mt-2 md:mt-8" >{t(`testimonials.review${review.id}.p`)}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const { t } = useTranslation("common");

  return (
    <section className='max-w-1680 mx-auto h-full pt-[160px]'>
      <div className='px-5 md:px-[80px] mb-[120px]'>
        <h2 className='max-w-[540px] mx-auto section-title mb-4 md:mb-[44px] text-center'>
          {t("testimonials.title")}
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4'>
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
