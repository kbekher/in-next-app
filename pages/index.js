'use client';

import { useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';

import '../app/globals.css';

import Header from '@/components/Header/Header';
import Logos from '@/components/Logos/Logos';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Footer from '@/components/Footer/Footer';
import NavbarMobile from '@/components/Navbar/NavbarMobile';
import Projects from '@/components/Projects/Projects';

const Homepage = ({ onCookieSettings }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className='min-w-[320px] overflow-x-hidden'>
      <div className='w-full min-h-screen'>
        <Header />
        <NavbarMobile />

        <main>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 0.6}}
          >
            <Projects />
            <Logos />
            <About />
            <Skills />
          </motion.div>
        </main>

        <Footer onCookieSettings={onCookieSettings} />
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
