'use client';

import { useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Roboto } from 'next/font/google';

import '../app/globals.css';

import Header from '@/components/Header/Header';
import Skills from '@/components/Skills/Skills';
import About from '@/components/About/About';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';
import NavbarMobile from '@/components/Navbar/NavbarMobile';
import Projects from '@/components/Projects/Projects';

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

const Homepage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className={`${roboto.className} min-w-[320px] overflow-x-hidden`}>
      <div className='w-full h-full'>
        <Header />
        <NavbarMobile />

        <main>
          <Projects />
          <Skills />
          <About />
          <Testimonials />
        </main>

        <Footer />
      </div>
    </div>
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
