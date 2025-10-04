import { useTranslation } from "next-i18next";
import Image from "next/image";

import SectionWrapper from "@/hoc/SectionWrapper";

import ContactLinks from "../ContactLinks/ContactLinks";
import imageLoader from "@/utils/image-loader";
import { DOMAIN, mediaLinks } from "@/constants";

const About = () => {
  const { t } = useTranslation("common");

  return (
    <div className="border-t border-[var(--color-gray-border)] pt-[22px] lg:pt-[40px]">
      <div className='flex flex-col gap-4 lg:grid lg:grid-cols-12 lg:gap-5'>
        {/* Image */}
        <div className='w-full lg:col-span-4 lg:col-start-9'>
          <Image
            src={`${DOMAIN}/hero.jpg`}
            alt="Ivan Inozemtsev"
            width={600}
            height={600}
            loader={imageLoader}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Title */}
        <h2 className='text-[16px] font-medium lg:col-span-3 lg:col-start-1 lg:row-start-1'>
          {t("about.title")}
        </h2>

        {/* Content */}
        <div className='space-y-4 lg:space-y-[40px] lg:col-span-4 lg:col-start-4 lg:row-start-1'>


          <div className='text-[var(--color-gray)] space-y-4 lg:flex lg:flex-col'>

            {/* Description paragraphs */}
            <p>{t("about.p1")}</p>

            <div className='space-y-4 lg:col-span-4 lg:col-start-6 lg:col-span-2'>
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