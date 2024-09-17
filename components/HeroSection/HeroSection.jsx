import { useTranslation } from "next-i18next";
import Image from "next/image";
import ContactLinks from "../ContactLinks/ContactLinks";

const HeroSection = ({ name, hasLinks = false }) => {
  const { t } = useTranslation("common");

  return (
    <div className='h-[100vh] w-full flex flex-col md:flex-row justify-between itmes-center'>
        <div className="flex flex-col justify-center px-5 pt-[100px] md:pl-20 md:px-0 md:pt-0 text-center md:text-left">
          <h2 className="text-[36px] md:text-[48px] leading-tight font-extrabold mb-4">
            {name === "hero" 
              ? t(`${name}.title`).split(" ").map((word, index) => {
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
              }) :
              t(`${name}.title`)
            }
          </h2>

            <p className="text-sm md:text-base mb-6">{t(`${name}.p`)}</p>

            {hasLinks && <ContactLinks />}
        </div>

        <Image
          src={`https://inozemtsev-portfolio.s3.eu-central-1.amazonaws.com/${name}.png`}
          alt='Ivan Inozemtsev'
          width={650}
          height={800}
          draggable='false'
          className="w-auto h-[100%] md:w-1/2 md:h-auto hero-image"
          style={{
            objectPosition: "bottom",
          }}
        />
    </div>
  );
};

export default HeroSection;
