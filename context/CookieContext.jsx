'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { GA_ID } from '@/constants';

const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
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
      const parsedPreferences = JSON.parse(savedPreferences);
      setPreferences(parsedPreferences);

      // If analytics was previously enabled, load GA automatically on page refresh
      if (parsedPreferences.analytics) {
        // Add a small delay to ensure DOM is ready
        setTimeout(() => {
          loadGoogleAnalytics();
        }, 100);
      }
    }

    if (savedConsent) {
      setConsentGiven(true);
    }
  }, []);

  const loadGoogleAnalytics = () => {
    if (typeof window !== 'undefined' && !window.gtag) {
      // Check if scripts already exist to avoid duplicates
      if (document.getElementById('ga-script-1') || document.getElementById('ga-script-2')) {
        return;
      }

      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script1.id = 'ga-script-1';
      script1.onload = () => {
        // Ensure gtag is available before configuring
        if (window.gtag) {
          window.gtag('js', new Date());
          window.gtag('config', GA_ID);
        }
      };
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.id = 'ga-script-2';
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
      `;
      document.head.appendChild(script2);
    }
  };

  const removeGoogleAnalytics = () => {
    if (typeof window !== 'undefined') {
      // Remove GA scripts
      const script1 = document.getElementById('ga-script-1');
      const script2 = document.getElementById('ga-script-2');

      if (script1) {
        document.head.removeChild(script1);
      }
      if (script2) {
        document.head.removeChild(script2);
      }

      // Disable GA tracking by setting the disable flag
      window[`ga-disable-${GA_ID}`] = true;

      // Clear dataLayer instead of deleting it
      if (window.dataLayer) {
        window.dataLayer.length = 0; // Clear the array
      }

      // Override gtag function to do nothing instead of deleting it
      if (window.gtag) {
        window.gtag = null;
      }
    }
  };

  const updatePreferences = (newPreferences) => {
    // Update state first
    setPreferences(newPreferences);
    setConsentGiven(true);

    // Then save to localStorage
    localStorage.setItem('cookiePreferences', JSON.stringify(newPreferences));
    localStorage.setItem('cookieConsentGiven', 'true');

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
    } else {
      removeGoogleAnalytics();
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true
    };
    updatePreferences(allAccepted);
  };

  const canStoreLanguage = () => {
    return preferences.functional && consentGiven;
  };

  const canUseAnalytics = () => {
    return preferences.analytics && consentGiven;
  };

  return (
    <CookieContext.Provider value={{
      preferences,
      consentGiven,
      updatePreferences,
      acceptAll,
      canStoreLanguage,
      canUseAnalytics
    }}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookiePreferences = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookiePreferences must be used within a CookieProvider');
  }
  return context;
};
