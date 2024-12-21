import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
// import nextI18NextConfig from '../next-i18next.config.js'

const MyApp = ({ Component, pageProps }) => (
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

      <Component {...pageProps} />
    </>
  );

export default appWithTranslation(MyApp /*, nextI18NextConfig */);
