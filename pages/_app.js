import Preloader from '@/components/Preloader/Preloader';
import { appWithTranslation } from 'next-i18next';
import { useMediaQuery } from 'react-responsive';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { DOMAIN } from '@/constants';
// import nextI18NextConfig from '../next-i18next.config.js'

const MyApp = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const videoUrl = isMobile ? `${DOMAIN}bg-mobile.mov` : `${DOMAIN}web-bg.webm`;

  useEffect(() => {
    // const video = document.createElement('video');
    // video.src = videoUrl;
    // video.preload = 'auto'; // Preload the video
    // video.oncanplaythrough = () => {
      // Ensure the preloader stays for at least 2 seconds
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timeout);
    // };

    video.onerror = () => {
      setIsLoading(false); // Fallback if video fails to load
    };

    // Cleanup the video object
    return () => {
      video.oncanplaythrough = null;
      video.onerror = null;
    };
  }, []);

  return (
    <>
      <Head>
        <title>
          Ivan Inozemtsev | UX/UI Designer - Creating Inspiring Web Solutions
        </title>
        <meta
          name='description'
          content='Welcome to the portfolio of Ivan Inozemtsev, a UX/UI designer and Illustrator focused on creating visually appealing and user-friendly digital products.'
        />
      </Head>

      { isLoading && <Preloader /> }
      { !isLoading && <Component {...pageProps} /> }
    </>
  );
}

export default appWithTranslation(MyApp /*, nextI18NextConfig */);
