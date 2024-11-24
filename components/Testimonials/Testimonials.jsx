import { useTranslation } from "next-i18next";
import Image from "next/image";

import { DOMAIN, reviews } from "@/constants";

const ReviewCard = ({ review, t }) => (
  <div className='bg-[var(--color-bg-tile)] rounded-[43px]'>
    <div className='flex flex-col items-center gap-4 w-full h-full p-[40px] pt-[30px]'>
      <div className='w-[100px] h-[100px] bg-[var(--color-gray)] rounded-full overflow-hidden aspect-square'>
        <Image
          src={`${DOMAIN}${review.imgUrl}`}
          alt={t(`testimonials.review${review.id}.name`)}
          width={100}
          height={100}
          className='object-cover'
        />
      </div>
      <h4>{t(`testimonials.review${review.id}.name`)}</h4>
      <p>{t(`testimonials.review${review.id}.p`)}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const { t } = useTranslation("common");

  return (
    <section className='max-w-1680 mx-auto h-full pt-[160px]'>
      <div className='px-5 md:px-[80px] mb-[120px]'>
        <h2 className='max-w-[540px] mx-auto text-[36px] md:text-[48px] leading-tight mb-[54px] text-center'>
          {t("testimonials.title")}
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[20px] w-full'>
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
