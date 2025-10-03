"use client";

import { useTranslation } from "next-i18next";
import Image from "next/image";

import { skillsAndTools } from "@/constants";
import SectionWrapper from "@/hoc/SectionWrapper";

// Reusable Tool Component
const ToolCard = ({ tool, size = "mobile" }) => {
  const padding = size === "mobile" ? "p-12" : "p-8";
  
  return (
    <div className={`aspect-square w-full h-full bg-[var(--color-gray-tile)] flex items-center justify-center ${padding}`}>
      <Image
        src={tool.icon}
        alt={tool.name}
        width={40}
        height={40}
        unoptimized
        className="object-contain w-auto h-[44px]"
      />
    </div>
  );
};

// Reusable Skill Component
const SkillCard = ({ skill, t, layout = "mobile", index = 0, totalSkills = 0 }) => {
  const getDesktopClasses = () => {
    const isFirstOrLast = index === 0 || index === totalSkills - 1;
    const colSpan = isFirstOrLast ? 'col-span-4' : 'col-span-2';
    const paddingTop = index !== 0 ? 'pt-14' : 'pt-4 justify-center';
    return `${colSpan} ${paddingTop}`;
  };

  const baseClasses = "bg-[var(--color-gray-tile)] p-4 flex flex-col space-y-2";
  const mobileClasses = "px-[68px] py-[40px]";
  const desktopClasses = `${getDesktopClasses()} justify-baseline`;
  
  const containerClasses = layout === "mobile" 
    ? `${baseClasses} ${mobileClasses}` 
    : `${baseClasses} ${desktopClasses}`;

  return (
    <div className={containerClasses}>
      <h4 className="uppercase">
        {t(`skills.${skill.name}.title`)}
      </h4>
      <p className="text-[var(--color-gray)]">
        {t(`skills.${skill.name}.p`)}
      </p>
    </div>
  );
};

// Header Component
const SkillsHeader = ({ t, layout = "mobile" }) => {
  if (layout === "mobile") {
    return (
      <div className="mb-4">
        <h2 className="text-[16px] font-medium mb-4">{t("skills.title")}</h2>
        <p className="text-[var(--color-gray)] mb-6">{t("skills.p")}</p>
      </div>
    );
  }

  return (
    <div className="mb-8 grid grid-cols-12 gap-5">
      <h2 className="mb-4">{t("skills.title")}</h2>
      <p className="text-[var(--color-gray)] mb-8 col-start-4 col-span-8">
        {t("skills.p")}
      </p>
    </div>
  );
};

const Skills = () => {
  const { t } = useTranslation("common");

  const tools = skillsAndTools.filter(item => item.icon);
  const competencies = skillsAndTools.filter(item => !item.icon);

  return (
    <div className="border-t border-[var(--color-gray-border)] pt-[22px] md:pt-[32px]">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <SkillsHeader t={t} layout="mobile" />

        {/* Tools Grid - 2x2 */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {tools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} size="mobile" />
          ))}
        </div>

        {/* Skills List */}
        <div className="space-y-4">
          {competencies.map((skill) => (
            <SkillCard 
              key={skill.name} 
              skill={skill} 
              t={t} 
              layout="mobile" 
            />
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-col gap-[6px]">
        {/* Tools and Skills Grid */}
        <div className="grid grid-cols-12 grid-rows-2 gap-5 mb-4">
          {tools.map((tool) => (
            <div key={tool.name} className="col-span-2">
              <ToolCard tool={tool} size="desktop" />
            </div>
          ))}

          {competencies.map((skill, index) => (
            <SkillCard 
              key={skill.name} 
              skill={skill} 
              t={t} 
              layout="desktop" 
              index={index}
              totalSkills={competencies.length}
            />
          ))}
        </div>

        <SkillsHeader t={t} layout="desktop" />
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");