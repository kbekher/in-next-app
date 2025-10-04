import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';

import { useState } from 'react';
import Preloader from '@/components/Preloader/Preloader';
import CookieConsent from '@/components/CookieConsent/CookieConsent';
import CookieBanner from '@/components/CookieConsent/CookieBanner';
import { CookieProvider } from '@/context/CookieContext';

const MyApp = ({ Component, pageProps }) => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(null);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  const handleManagePreferences = () => {
    setShowCookieBanner(false); // Hide banner when opening preferences
    setShowCookieConsent(true);
  };

  const handleCloseCookieConsent = () => {
    setShowCookieConsent(false);
  };

  const handleCancelCookieConsent = () => {
    setShowCookieConsent(false);  // Always hide consent modal
    
    // Only show banner again if no consent has been given yet
    const consentGiven = localStorage.getItem('cookieConsentGiven');
    if (!consentGiven) {
      setShowCookieBanner(true);    // Show banner again only if no consent exists
    }
  };

  return (
    <CookieProvider>
      <Head>
        {/* Essential Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* SEO Meta Tags */}
        <title>Ivan Inozemtsev | UX/UI & Graphic Designer</title>
        <meta name='description' content='Crafting visual identities and digital experiences.' />
        <meta name="keywords" content="UX/UI design, Installations, Artworks, Ivan Inozemtsev, graphic design, art, illustration, ukrainian artist, artist, designer, artist and designer, colour, art, german artist, artist, designer, germany"></meta>
        
        {/* Robots Meta Tags - Explicitly allow indexing */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Ivan Inozemtsev | UX/UI & Graphic Designer" />
        <meta property="og:description" content="Crafting visual identities and digital experiences." />
        <meta property="og:url" content="https://www.inozemtsevco.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://d282ut73jdj7fd.cloudfront.net/preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ivan Inozemtsev UX/UI & Graphic Designer Portfolio" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ivan Inozemtsev | UX/UI & Graphic Designer" />
        <meta name="twitter:description" content="Crafting visual identities and digital experiences." />
        <meta name="twitter:image" content="https://d282ut73jdj7fd.cloudfront.net/preview.png" />
        <meta name="twitter:image:alt" content="Ivan Inozemtsev UX/UI & Graphic Designer Portfolio" />
        
        {/* Favicons */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Portfolio" />
      </Head>

      {showPreloader && (
        <Preloader
          onComplete={handlePreloaderComplete}
        />
      )}
      
      {!showPreloader && (
        <>
          <Component {...pageProps} onCookieSettings={handleManagePreferences} />
          <CookieBanner 
            onManagePreferences={handleManagePreferences}
            showBanner={showCookieBanner}
          />
          <CookieConsent 
            isOpen={showCookieConsent} 
            onClose={handleCloseCookieConsent}
            onCancel={handleCancelCookieConsent}
          />
        </>
      )}
    </CookieProvider>
  );
}

export default appWithTranslation(MyApp /*, nextI18NextConfig */);
