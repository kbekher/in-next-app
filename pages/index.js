'use client';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Roboto } from 'next/font/google';

import '../app/globals.css';

import Hero from '../components/Hero/Hero';
import Project from '@/components/Project/Project';
import Illustrations from '@/components/Illustrations/Illustrations';
import Skills from '@/components/Skills/Skills';
import About from '@/components/About/About';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

const Homepage = () => {

  return (
    <>
      <div className={`${roboto.className} min-w-[320px] overflow-hidden`}>
        <div className='w-full h-full'>
          <Hero />

          <main>
            <Project type="ux" name="ace-and-tate"  />
            <Project type="ux" name="xtrafit" />
            <Project type="brand" name="flowtech" />
            <Project type="brand" name="paysera" />
            <Illustrations />
            <Skills />
            <About />
            <Testimonials />
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
