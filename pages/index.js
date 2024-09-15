'use client';

import HeroSection from '../components/HeroSection/HeroSection';
// import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import localFont from 'next/font/local';
// import i18nextConfig from '../next-i18next.config';

import '../app/globals.css';

const myFont = localFont({ src: '../app/NeueMontreal-Light.otf' });

const Homepage = () => {
  return (
    <>
      <main className={`${myFont.className} min-w-[320px]`}>
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
