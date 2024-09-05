import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import i18nextConfig from '../next-i18next.config';

class MyDocument extends Document {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale ??
      i18nextConfig.i18n.defaultLocale
    return (
      <Html lang={currentLocale}>
        <Head>
          <meta charSet="utf-8" />
          <link
            data-react-helmet='true'
            rel='icon'
            href='https://inozemtsev-portfolio.s3.eu-central-1.amazonaws.com/logo.png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument