import React, { useContext } from 'react';
import { useTranslation } from "next-i18next";
import { motion } from 'framer-motion';

import { scrollFadeIn } from "@/utils/motion";
import { HeaderContext } from '@/context/HeaderContext';

const HeaderTitle = () => {
  const { t } = useTranslation("common");
  const { isShrunk, scrollDirection } = useContext(HeaderContext);

  return (
    <motion.h1
      {...scrollFadeIn(isShrunk, scrollDirection)}
      className='md:max-w-[490px] text-[40px] leading-[normal] md:text-5xl select-none'
    >
      {t("h1")}
    </motion.h1>
  )
}

export default HeaderTitle;
