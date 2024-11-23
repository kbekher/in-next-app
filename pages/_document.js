import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import i18nextConfig from '../next-i18next.config';
import { DOMAIN } from "@/constants";

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
            href={`${DOMAIN}logo-new.png`}
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