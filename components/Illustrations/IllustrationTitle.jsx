import { useTranslation } from "next-i18next";

const IllustrationTitle = () => {
  const { t } = useTranslation("common");

  return (
    <div className='max-w-[540px] m-auto'>
      <h2 className='section-title mb-6 md:mb-8 text-center'>
        {t('illustrations.title')}
      </h2>
      <p className='text-center text-[16px] md:text-[14px]'>{t('illustrations.p')}</p>
    </div>
  )
}
export default IllustrationTitle
