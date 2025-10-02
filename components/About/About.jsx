import { useTranslation } from "next-i18next";
import Image from "next/image";
import { motion } from "framer-motion";

import { DOMAIN } from "@/constants";
import SectionWrapper from "@/hoc/SectionWrapper";
import { fadeIn } from "@/utils/motion";

import ContactLinks from "../ContactLinks/ContactLinks";
import Divider from "../Logos/Logos";

const About = () => {
  const { t } = useTranslation("common");

  return (
    <section className="max-w-1680 mx-auto h-full md:pt-[146px] pt-[130px]" id="about">
      {/* <div className='grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 px-5 md:px-[80px] mb-[84px]'>
        <motion.div
          {...fadeIn("right", "spring", 0.5, 0.75)}
          className='col-span-2 md:col-span-6 flex flex-col justify-center md:pt-[100px] lg:pr-20 lg:pt-0 text-center lg:text-left pb-5 lg:pb-0'
        >
          <h2 className='section-title mb-4 text-center md:text-left'>
            {t("about.title")}
          </h2>

          <p className='text-sm md:text-base mb-6 md:text-justify'>{t("about.p1")}</p>
          <p className='text-sm md:text-base mb-6 md:text-justify'>{t("about.p2")}</p>
          <p className='text-sm md:text-base mb-6 md:text-justify'>{t("about.p3")}</p>

          <ContactLinks />
        </motion.div>

        <motion.div
          {...fadeIn("left", "spring", 0.5, 0.75)}
          className='col-span-2 md:col-start-7 md:col-span-6 h-[100%] flex items-center'
        >
          <div className="w-[100%] max-w-[600px] mx-auto lg:max-w-[800px] overflow-hidden bg-[var(--color-gray)] rounded-[56px] md:rounded-[144px] pt-20 flex justify-center">
            <Image
              src={`${DOMAIN}hero.png`}
              alt='Ivan Inozemtsev'
              width={700}
              height={778}
              draggable='false'
              className='object-cover'
              //  sizes="(max-width: 1200px) 100vw, (max-width: 1200px) 50vw, 33vw" // TODO:
            />
          </div>
        </motion.div>
      </div>
      <Divider /> */}
    </section>
  );
};

export default SectionWrapper(About, "about");

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
