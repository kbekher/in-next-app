import { useTranslation } from "next-i18next";
import Image from "next/image";
import ContactLinks from "../ContactLinks/ContactLinks";
import Devider from "../Devider/Devider";

const About = () => {
  const { t } = useTranslation("common");

  return (
    <section className="max-w-[1680px] m-auto h-full pt-[230px]">
      <div className='h-full w-full flex flex-col lg:flex-row justify-between itmes-center px-5 lg:px-[80px] mb-[84px]'>
        {/* Text Section */}
        <div className='lg:w-1/2 flex flex-col justify-center pt-[100px] lg:pr-20 lg:pt-0 text-center lg:text-left  pb-5 lg:pb-0'>
          <h2 className='text-[36px] lg:text-[48px] leading-tight mb-4'>
            {t("about.title")}
          </h2>

          <p className='text-sm md:text-base mb-6'>{t("about.p1")}</p>
          <p className='text-sm md:text-base mb-6'>{t("about.p2")}</p>
          <p className='text-sm md:text-base mb-6'>{t("about.p3")}</p>

          <ContactLinks />
        </div>

        {/* Image Section */}
        <div className='lg:w-1/2 h-[100%] flex items-center'>
          <div className="w-[100%] max-w-[600px] m-auto lg:max-w-[800px] overflow-hidden bg-[var(--color-gray)] rounded-[40px] lg:rounded-[100px] pt-20 flex justify-center">
            <Image
              src={`https://inozemtsev-portfolio.s3.eu-central-1.amazonaws.com/hero.png`}
              alt='Ivan Inozemtsev'
              width={700}
              height={778}
              draggable='false'
              className='object-cover'
            />
          </div>
          </div> 
      </div>
      <Devider />
    </section>
  );
};

export default About;

{
  /* {t(`${name}.title`).split(" ").map((word, index) => {
                if (word === "Design" || word === "Illustration") {
                  return (
                    <span
                      key={index}
                      className='bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-animation'
                      style={{
                        animation: `gradient-animation 12s ease-in-out infinite`,
                        animationDelay: `${1 * index}s`,  // Staggered delay based on index
                      }}
                    >
                      {word}
                    </span>
                  );
                } else {
                  return ` ${word} `;
                }
              })} */
}
