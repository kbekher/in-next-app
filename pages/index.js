'use client';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import localFont from 'next/font/local';

import '../app/globals.css';

import HeaderSection from '../components/HeaderSection/HeaderSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import Footer from '@/components/Footer/Footer';

const myFont = localFont({ src: '../app/PPNeueMontreal-Thin.otf' });

const Homepage = () => {

  
  return (
    <>
      <div className={`${myFont.className} min-w-[320px]`}>
        <div className='w-full h-full'>
          <HeaderSection />

          <main>
            <HeroSection name="bio" />
          </main>

          <Footer />
        </div>
      </div>
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
