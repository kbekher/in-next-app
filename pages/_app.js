import Preloader from '@/components/Preloader/Preloader';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { useLayoutEffect, useState } from 'react';
// import nextI18NextConfig from '../next-i18next.config.js'

const MyApp = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleTransitionEnd = () => {
    console.log("Preloader animation ended!");
    setIsLoading(false); // Stop rendering the Preloader
  };

  useLayoutEffect(() => {

    setTimeout(() => setIsLoading(false), 2000);

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

      <Preloader onTransitionEnd={handleTransitionEnd} isLoading={isLoading} />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp /*, nextI18NextConfig */);
