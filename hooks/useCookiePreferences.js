'use client';

import { useState, useEffect } from 'react';

export const useCookiePreferences = () => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false
  });

  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Load preferences from localStorage
    const savedPreferences = localStorage.getItem('cookiePreferences');
    const savedConsent = localStorage.getItem('cookieConsentGiven');

    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }

    if (savedConsent) {
      setConsentGiven(true);
    }
  }, []);

  const updatePreferences = (newPreferences) => {
    setPreferences(newPreferences);
    localStorage.setItem('cookiePreferences', JSON.stringify(newPreferences));
    localStorage.setItem('cookieConsentGiven', 'true');
    setConsentGiven(true);

    // Handle functional cookies (language storage)
    if (newPreferences.functional) {
      localStorage.setItem('functionalCookiesEnabled', 'true');
    } else {
      localStorage.removeItem('functionalCookiesEnabled');
      localStorage.removeItem('language');
    }

    // Handle analytics cookies
    if (newPreferences.analytics) {
      loadGoogleAnalytics();
    }
  };

  const loadGoogleAnalytics = () => {
    if (typeof window !== 'undefined' && !window.gtag) {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'; // Replace with your actual GA ID
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID'); // Replace with your actual GA ID
      `;
      document.head.appendChild(script2);
    }
  };

  const canStoreLanguage = () => {
    return preferences.functional && consentGiven;
  };

  const canUseAnalytics = () => {
    return preferences.analytics && consentGiven;
  };

  return {
    preferences,
    consentGiven,
    updatePreferences,
    canStoreLanguage,
    canUseAnalytics
  };
};
