'use client';

import { useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import '../app/globals.css';

import Header from '@/components/Header/Header';
import Skills from '@/components/Skills/Skills';
import About from '@/components/About/About';
import Footer from '@/components/Footer/Footer';
import NavbarMobile from '@/components/Navbar/NavbarMobile';
import Projects from '@/components/Projects/Projects';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className='min-w-[320px] overflow-x-hidden'>
      <div className='w-full min-h-screen'>
        <Header />
        <NavbarMobile />

        <main>
          <Projects />
          <Skills />
          <About />
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
