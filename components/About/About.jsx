import { useTranslation } from "next-i18next";
import Image from "next/image";

import SectionWrapper from "@/hoc/SectionWrapper";
import { fadeIn } from "@/utils/motion";

import ContactLinks from "../ContactLinks/ContactLinks";
import imageLoader from "@/utils/image-loader";
import { DOMAIN, mediaLinks } from "@/constants";

const About = () => {
  const { t } = useTranslation("common");

  return (
    <div className="border-t border-[var(--color-gray-border)] pt-[22px]">
      <div className='flex flex-col gap-6 md:flex-row-reverse md:gap-[60px]'>
        {/* Image */}
        <div className='w-full'>
          <Image
            src={`${DOMAIN}/hero.jpg`}
            alt="Ivan Inozemtsev"
            width={600}
            height={600}
            loader={imageLoader}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className='space-y-6'>
          {/* Title */}
          <h2 className='text-[16px] font-medium'>
            {t("about.title")}
          </h2>

          <div className='text-[var(--color-gray)] text-[12px] leading-relaxed space-y-4 md:space-y-0 md:flex md:gap-6 md:items-start'>

            {/* Description paragraphs */}
            <div className='space-y-4'>
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>

            <div className='md:space-y-4'>
              {/* Name and Title */}
              <div>
                <p className=''>Ivan Inozemtsev</p>
                <p className=''>{t("about.p4")}</p>
              </div>

              {/* Location and Email */}
              <div>
                <p className=''>{t("about.p5")}</p>
                <a
                  href="mailto:inozemtsevco@gmail.com"
                  className='hover:text-[var(--color-black)] transition-colors'
                >
                  inozemtsevco@gmail.com
                </a>
              </div>

              {/* Social Links */}
              <div className="flex flex-col">
                <ContactLinks slice={2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");