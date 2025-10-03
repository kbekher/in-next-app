'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CookieConsent = ({ isOpen, onClose }) => {
  const { t } = useTranslation('common');

  const [preferences, setPreferences] = useState({
    necessary: true, // Always required
    functional: false,
    analytics: false
  });

  // Load saved preferences on mount
  useEffect(() => {
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const handleToggle = (type) => {
    if (type === 'necessary') return; // Can't disable necessary cookies

    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const savePreferences = () => {
    // Save to localStorage
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookieConsentGiven', 'true');

    // Enable language preference storage if functional cookies are enabled
    if (preferences.functional) {
      localStorage.setItem('functionalCookiesEnabled', 'true');
    } else {
      localStorage.removeItem('functionalCookiesEnabled');
      localStorage.removeItem('language'); // Remove saved language if functional disabled
    }

    // Load Google Analytics if analytics cookies are enabled
    if (preferences.analytics) {
      loadGoogleAnalytics();
    }

    onClose();
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true
    };

    setPreferences(allAccepted);
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    localStorage.setItem('cookieConsentGiven', 'true');
    localStorage.setItem('functionalCookiesEnabled', 'true');

    loadGoogleAnalytics();
    onClose();
  };

  const loadGoogleAnalytics = () => {
    // Add Google Analytics script
    if (typeof window !== 'undefined' && !window.gtag) {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'; // Replace with your GA ID
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID'); // Replace with your GA ID
      `;
      document.head.appendChild(script2);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] bg-black/50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[var(--color-bg-menu)] max-w-md md:max-w-2xl w-full p-6 text-[var(--color-white)] text-sm"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium md:mb-[32px] text-sm">{t('cookie-settings.title')}</h2>
          </div>

          {/* Cookie Types */}
          <div className="space-y-4 mb-4 md:mb-5 md:space-y-5">
            {/* Necessary Cookies */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{t('cookie-settings.necessary.title')}</p>
                <p className="text-[var(--color-gray)]">{t('cookie-settings.necessary.p')}</p>
              </div>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="sr-only"
                />
                <div className="w-10 h-5 bg-blue-500 rounded-full flex items-center justify-end px-1">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{t('cookie-settings.functional.title')}</p>
                <p className="text-[var(--color-gray)]">{t('cookie-settings.functional.p')}</p>
              </div>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={() => handleToggle('functional')}
                  className="sr-only"
                />
                <div
                  className={`w-10 h-5 rounded-full flex items-center px-1 cursor-pointer transition-colors ${preferences.functional ? 'bg-blue-500 justify-end' : 'bg-gray-600 justify-start'
                    }`}
                  onClick={() => handleToggle('functional')}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{t('cookie-settings.analytics.title')}</p>
                <p className="text-[var(--color-gray)]">{t('cookie-settings.analytics.p')}</p>
              </div>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => handleToggle('analytics')}
                  className="sr-only"
                />
                <div
                  className={`w-10 h-5 rounded-full flex items-center px-1 cursor-pointer transition-colors ${preferences.analytics ? 'bg-blue-500 justify-end' : 'bg-gray-600 justify-start'
                    }`}
                  onClick={() => handleToggle('analytics')}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[var(--color-gray)] mb-[40px] md:mb-[200px]">
            {t('cookie-settings.span')}
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <button
              onClick={savePreferences}
              className="flex-1 md:flex-none px-3 md:px-2 py-2 md:py-1 md:w-max border border-solid border-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-black)] transition-colors"
            >
              {t('cookie-settings.save-all')}
            </button>

            <div className="flex flex-col md:flex-row gap-4">
              <button
                onClick={onClose}
                className="flex-1 md:flex-none px-3 md:px-2 py-2 md:py-1 border border-solid border-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-black)] transition-colors"
              >
                {t('cookie-settings.cancel')}
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 md:flex-none px-3 md:px-2 py-2 md:py-1 bg-[var(--color-white)] text-[var(--color-black)] hover:bg-gray-200 transition-colors"
              >
                {t('cookie-settings.accept-all')}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence >
  );
};

export default CookieConsent;
