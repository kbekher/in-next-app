import Preloader from '@/components/Preloader/Preloader';
import { appWithTranslation } from 'next-i18next';
import { useMediaQuery } from 'react-responsive';
import Head from 'next/head';
import { useLayoutEffect, useState } from 'react';
import { DOMAIN } from '@/constants';
// import nextI18NextConfig from '../next-i18next.config.js'

const MyApp = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(true);

  // const handleTransitionEnd = () => {
  //   setIsLoading(false); 
  // };

  const isMobile = useMediaQuery({ maxWidth: 768 }) || /mobile/i.test(navigator.userAgent);
  console.log(isMobile);

  const imageUrl = isMobile ? `${DOMAIN}mobile-bg.gif` : `${DOMAIN}bg.gif`;
  console.log(imageUrl);


  useLayoutEffect(() => {

    // setHeaderImage(imageUrl);

    // Preload the image
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      // const timeout = setTimeout(() => {
        setIsLoading(false);
      // }, 1000);
      // return () => clearTimeout(timeout);
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

      {isLoading && <Preloader />}
      {!isLoading && <Component {...pageProps} />}
    </>
  );
}

export default appWithTranslation(MyApp /*, nextI18NextConfig */);
