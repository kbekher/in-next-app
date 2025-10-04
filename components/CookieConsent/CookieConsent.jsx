'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useCookiePreferences } from '@/context/CookieContext';

const CookieConsent = ({ isOpen, onClose, onCancel }) => {
  const { t } = useTranslation('common');
  const { 
    preferences: savedPreferences, 
    updatePreferences, 
    acceptAll,
  } = useCookiePreferences();

  // Local state for the modal (separate from saved preferences)
  const [localPreferences, setLocalPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false
  });

  // Sync local preferences with saved ones when modal opens
  useEffect(() => {
    if (isOpen) {
      setLocalPreferences(savedPreferences);
    }
  }, [isOpen, savedPreferences]);

  const handleToggle = (type) => {
    if (type === 'necessary') return; // Can't disable necessary cookies

    setLocalPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const savePreferences = () => {
    // Save local preferences to localStorage and handle GA
    updatePreferences(localPreferences);
    onClose();
  };

  const handleAcceptAll = () => {
    acceptAll();
    onClose();
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
                  checked={localPreferences.necessary}
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
                  checked={localPreferences.functional}
                  onChange={() => handleToggle('functional')}
                  className="sr-only"
                />
                <div
                  className={`w-10 h-5 rounded-full flex items-center px-1 cursor-pointer transition-colors ${localPreferences.functional ? 'bg-blue-500 justify-end' : 'bg-gray-600 justify-start'
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
                  checked={localPreferences.analytics}
                  onChange={() => handleToggle('analytics')}
                  className="sr-only"
                />
                <div
                  className={`w-10 h-5 rounded-full flex items-center px-1 cursor-pointer transition-colors ${localPreferences.analytics ? 'bg-blue-500 justify-end' : 'bg-gray-600 justify-start'
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
                onClick={onCancel}
                className="flex-1 md:flex-none px-3 md:px-2 py-2 md:py-1 border border-solid border-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-black)] transition-colors"
              >
                {t('cookie-settings.cancel')}
              </button>
              <button
                onClick={handleAcceptAll}
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
