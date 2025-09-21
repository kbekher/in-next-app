import { useTranslation } from "next-i18next";

const HeaderTitle = () => {
  const { t } = useTranslation("common");

  return (
    <h1 className='md:max-w-[490px] text-[40px] leading-[normal] md:text-5xl select-none'>
      {t("h1")}
    </h1>
  )
}

export default HeaderTitle;
