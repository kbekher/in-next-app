'use client';

import HeroSection from '../components/HeroSection/HeroSection';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import localFont from 'next/font/local';
// import i18nextConfig from '../next-i18next.config';

import '../app/globals.css';

const myFont = localFont({ src: '../app/NeueMontreal-Light.otf' });

const Homepage = () => {
  const { t, i18n } = useTranslation('common');

  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const clientSideLanguageChange = (newLocale) => {
    i18n.changeLanguage(newLocale);
  };

  // const changeTo = router.locale === 'en' ? 'de' : 'en';
  // const changeTo = i18n.resolvedLanguage === 'en' ? 'de' : 'en'

  return (
    <>
      <main className={myFont.className}>
        <div className='w-full h-full'>
          <HeroSection />
        </div>
      </main>
    </>
  );
};


// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})


export default Homepage;
