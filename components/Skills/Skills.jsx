import { useTranslation } from "next-i18next";
import Image from "next/image";

import { skills } from "@/constants";
import Divider from "../Divider/Divider";

const SkillTile = ({ skill, t }) => (
    <div className='bg-[var(--color-bg-tile)] rounded-[22px]'>
      <div className='flex flex-col lg:flex-row items-center lg:items-start gap-4 w-full h-full p-[24px] pt-[30px]'>
        <div className='max-w-[88px] max-h-[88px] md:max-w-[78px] md:max-h-[78px] flex justify-center items-center bg-[var(--color-gray)] p-3 rounded-[22px] overflow-hidden aspect-square'>
          <Image src={skill.icon} alt={skill.name} width={64} height={64} />
        </div>

        <div className='md:flex flex-col flex-1 overflow-hidden p-0 md:gap-[8px] items-center lg:items-start text-center lg:text-start justify-start text-[14px]'>
          <h4>{t(`skills.${skill.name}.title`)}</h4>
          <p className='hidden md:flex'>{t(`skills.${skill.name}.p`)}</p>
        </div>
      </div>
    </div>
  );

const Skills = () => {
  const { t } = useTranslation("common");

  return (
    <section className='max-w-[1680px] m-auto h-full pt-[160px]'>
      <div className='px-5 md:px-[80px] mb-[64px]'>
        <h2 className='max-w-[740px] m-auto text-[36px] md:text-[48px] leading-tight mb-[24px] md:mb-[54px] text-center'>
          {t("skills.title")}
        </h2>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-[24px] md:gap-[20px] auto-rows-min min-w-[164px] min-h-[164px] md:min-h-[170px] justify-center overflow-hidden w-full'>
          {skills.map((skill) => (
            <SkillTile key={skill.name} skill={skill} t={t} />
          ))}
        </div>
      </div>
      <Divider />
    </section>
  );
};

export default Skills;
