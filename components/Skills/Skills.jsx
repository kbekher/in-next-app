'use client';

import { useTranslation } from "next-i18next";
import Image from "next/image";

import systems from "/images/systems.svg";
import graphic from "/images/graphic.svg";
import ux from "/images/ux.svg";
import prototyping from "/images/prototyping.svg";
import illustration from "/images/illustration.svg";
import ui from "/images/ui.svg";

import Devider from "../Devider/Devider";

const SKILLS = [
  { name: "systems", icon: systems },
  { name: "graphic", icon: graphic },
  { name: "ux", icon: ux },
  { name: "prototyping", icon: prototyping },
  { name: "illustration", icon: illustration },
  { name: "ui", icon: ui },
];

const Skills = () => {
  const { t } = useTranslation("common");

  return (
    <section className='max-w-[1680px] m-auto h-full pt-[160px]'>
      <div className='px-5 md:px-[80px] mb-[64px]'>
        <h2 className='max-w-[540px] m-auto text-[36px] md:text-[48px] leading-tight mb-[54px] text-center'>
          {t("skills.title")}
        </h2>

        <div className='grid grid-cols-3 grid-rows-2 gap-[12px] auto-rows-min h-[382px] justify-center overflow-hidden p-0 relative w-full'>
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className='bg-[var(--color-bg-tile)] rounded-[43px]'
            >
              <div className='flex items-start gap-4 w-full h-full p-[24px] pt-[30px]'>
                <div className='w-[78px] h-[78px] flex justify-center items-center bg-[var(--color-gray)] rounded-[22px] overflow-hidden aspect-square'>
                  <Image
                    src={skill.icon}
                    alt={skill}
                    width={64}
                    height={64}
                  />
                </div>

                <div className="relative flex flex-col flex-1 overflow-hidden p-0 gap-[8px] h-min w-[1px] items-start justify-start">
                  <h4>{t(`skills.${skill.name}.title`)}</h4>
                  <p>{t(`skills.${skill.name}.p`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Devider />
    </section>
  );
};

export default Skills;
