import React from 'react';
import { useTranslation } from "next-i18next";
import { motion } from 'framer-motion';

import { scrollFadeIn } from "@/utils/motion";

const HeaderTitle = ({ isShrunk, isScrollingDown }) => {
  const { t } = useTranslation("common");

  return (
    <motion.h1
      {...scrollFadeIn(isShrunk, isScrollingDown)}
      className='md:max-w-[490px] text-[40px] leading-[normal] md:text-5xl select-none'
    >
      {t("h1")}
    </motion.h1>
  )
}

export default HeaderTitle;
