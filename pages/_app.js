import { appWithTranslation } from 'next-i18next';
// import nextI18NextConfig from '../next-i18next.config.js'
import Head from 'next/head';

import { useEffect, useState } from 'react';
// import { useMediaQuery } from 'react-responsive';

import { HeaderProvider } from '../context/HeaderContext';
// import { DOMAIN } from '@/constants';

import Preloader from '@/components/Preloader/Preloader';


const MyApp = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
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

          {/* <meta name="description" content={pageProps.description || "Default Description"} />
          <meta property="og:title" content={pageProps.title || "Default Title"} />
          <meta property="og:description" content={pageProps.description || "Default Description"} />
          <meta property="og:image" content={pageProps.image || "/default-image.jpg"} /> */}
      </Head>

      <HeaderProvider>
        {isLoading && <Preloader />}
        {!isLoading && <Component {...pageProps} />}
      </HeaderProvider>

    </>
  );
}

export default appWithTranslation(MyApp /*, nextI18NextConfig */);
