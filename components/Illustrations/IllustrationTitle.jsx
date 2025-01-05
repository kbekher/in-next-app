import { useTranslation } from "next-i18next";
import { motion } from 'framer-motion';
import { scaleIn } from "@/utils/motion";

const IllustrationTitle = () => {
  const { t } = useTranslation("common");

  return (
    <motion.div
      {...scaleIn(0.5)}
      className='max-w-[540px] m-auto'
    >
      <h2 className='section-title mb-6 md:mb-8 text-center'>
        {t('illustrations.title')}
      </h2>
      <p className='text-center text-[16px] md:text-[14px]'>{t('illustrations.p')}</p>
    </motion.div>
  )
}
export default IllustrationTitle
