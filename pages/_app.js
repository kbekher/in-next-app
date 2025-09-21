import { appWithTranslation } from 'next-i18next';
// import nextI18NextConfig from '../next-i18next.config.js'
import Head from 'next/head';

import { useState } from 'react';
import Preloader from '@/components/Preloader/Preloader';

const MyApp = ({ Component, pageProps }) => {
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <>
      <Head>
        <title>Ivan Inozemtsev | UX/UI & Graphic Designer - Creating Inspiring Web Solutions</title>
        <meta name='description' content='UX/UI & Graphic Designer Ivan Inozemtsev creates web and graphic designs that bring ideas to life, blending creativity with seamless user experiences.' />
        <meta name="keywords" content="UX/UI design, Installations, Artworks, Ivan Inozemtsev, graphic design, art, illustration, ukrainian artist, artist, designer, artist and designer, colour, art, german artist, artist, designer, germany"></meta>
        <meta property="og:title" content="Ivan Inozemtsev | UX/UI & Graphic Designer - Creating Inspiring Web Solutions" />
        <meta property="og:description" content="UX/UI & Graphic Designer Ivan Inozemtsev creates web and graphic designs that bring ideas to life, blending creativity with seamless user experiences." />
        {/* <meta property="og:image" content="" /> TODO: add url */}
        <meta property="og:url" content="https://www.inozemtsevco.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ivan Inozemtsev | UX/UI & Graphic Designer - Creating Inspiring Web Solutions" />
        <meta name="twitter:description" content="UX/UI & Graphic Designer Ivan Inozemtsev creates web and graphic designs that bring ideas to life, blending creativity with seamless user experiences." />
        <link rel="apple-touch-icon" sizes="72x72" href="/logo.png"></link>
        <link rel="apple-touch-icon" sizes="114x114" href="/logo.png"></link>
        <link rel="apple-touch-icon" sizes="144x144" href="/logo.png"></link>
      </Head>

      {showPreloader && (
        <Preloader
          onComplete={handlePreloaderComplete}
        />
      )}
      {!showPreloader && <Component {...pageProps} />}
    </>
  );
}

export default appWithTranslation(MyApp /*, nextI18NextConfig */);
