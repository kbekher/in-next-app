'use client';

import HeaderSection from '../components/HeaderSection/HeaderSection';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import localFont from 'next/font/local';

import '../app/globals.css';
import HeroSection from '@/components/HeroSection/HeroSection';

const myFont = localFont({ src: '../app/NeueMontreal-Light.otf' });

const Homepage = () => {
  return (
    <>
      <main className={`${myFont.className} min-w-[320px]`}>
        <div className='w-full h-full'>
          <HeaderSection />

          {/* <HeroSection name="hero" hasLinks={true} /> */}

          <HeroSection name="bio" />
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
