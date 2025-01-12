"use client";

import { useTranslation } from "next-i18next";
import Image from "next/image";
import { motion } from "framer-motion";

import { skills } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";
import SectionWrapper from "@/hoc/SectionWrapper";

import Divider from "../Divider/Divider";
import BlurText from "../BlurText/BlurText";

const SkillTile = ({ skill, t, index }) => (
  <motion.div
    {...fadeIn("up", "spring", 0.5 * index, 0.75)}
    className='bg-[var(--color-bg-tile)] rounded-[43px] md:col-span-4'
  >
    <div className='flex flex-col lg:flex-row items-center lg:items-start gap-4 w-full h-full px-6 py-8'>
      <div className='flex justify-center items-center bg-[var(--color-gray)] p-2 rounded-[22px] overflow-hidden aspect-square'>
        <Image src={skill.icon} alt={skill.name} width={62} height={62} />
      </div>

      <div
        className='md:flex flex-col flex-1 gap-2 items-center justify-start lg:items-start text-center lg:text-start overflow-hidden p-0 text-[14px]'>
        <h4>
          <BlurText text={t(`skills.${skill.name}.title`)} index={index} />
        </h4>
        <div className='hidden md:flex'>
          <BlurText text={t(`skills.${skill.name}.p`)} index={index} />
        </div>
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const { t } = useTranslation("common");

  return (
    <section className='max-w-1680 mx-auto h-full pt-[146px]' id="skills">
      <div className='px-5 md:px-[80px] mb-[64px]'>
        <motion.h2
          {...textVariant("down")}
          className='max-w-[740px] mx-auto section-title mb-4 md:mb-12 text-center'
        >
          {t("skills.title")}
        </motion.h2>

        <div className='grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 auto-rows-min w-full'>
          {skills.map((skill, index) => (
            <SkillTile key={skill.name} skill={skill} t={t} index={index} />
          ))}
        </div>
      </div>
      <Divider />
    </section>
  );
};

export default SectionWrapper(Skills, "skills");
