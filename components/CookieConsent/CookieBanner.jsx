'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CookieBanner = ({ onManagePreferences, showBanner }) => {
  const { t } = useTranslation('common');

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If showBanner is explicitly set to true, show banner immediately
    if (showBanner === true) {
      setIsVisible(true);
      return;
    }

    // If showBanner is explicitly set to false, hide banner
    if (showBanner === false) {
      setIsVisible(false);
      return;
    }

    // Only check for initial visit logic when showBanner is undefined/null
    // This preserves the first-time visitor experience
    if (showBanner === undefined || showBanner === null) {
      const consentGiven = localStorage.getItem('cookieConsentGiven');
      if (!consentGiven) {
        // Show banner after a short delay for first-time visitors
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [showBanner]);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true
    };

    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    localStorage.setItem('cookieConsentGiven', 'true');
    localStorage.setItem('functionalCookiesEnabled', 'true');

    // Load Google Analytics
    loadGoogleAnalytics();

    setIsVisible(false);
  };

  const loadGoogleAnalytics = () => {
    if (typeof window !== 'undefined' && !window.gtag) {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-8E5C965PHX';
      script1.id = 'ga-script-1'; // Add ID for easy removal
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.id = 'ga-script-2'; // Add ID for easy removal
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-8E5C965PHX');
      `;
      document.head.appendChild(script2);
    }
  };

  const handleManagePreferences = () => {
    setIsVisible(false);
    onManagePreferences();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 left-1 right-1 z-[9999] bg-[var(--color-bg-menu)] p-4 pb-6 shadow-lg mx-auto text-[var(--color-white)] max-w-md md:max-w-full md:flex md:gap-12"
        >
          <p className="mb-[40px] md:mb-0 md:flex-1">
            {t('cookie-settings.p')}
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-5 md:items-center">
            <button
              onClick={handleManagePreferences}
              className="flex-1 md:flex-none px-3 md:px-2 py-2 md:py-1 md:h-max border border-solid border-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-black)] transition-colors"
            >
              {t('cookie-settings.manage-preferences')}
            </button>
            <button
              onClick={acceptAll}
              className="flex-1 md:flex-none px-3 md:px-2 py-2 md:py-1 md:h-max bg-[var(--color-white)] text-[var(--color-black)] hover:bg-gray-200 transition-colors"
            >
              {t('cookie-settings.accept-all')}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
