'use client';

import React, { useState } from 'react';
import { useTranslation } from 'next-i18next'
import { Dialog } from '@headlessui/react';

const SayHello = () => {
  const { t } = useTranslation('common');
  const [isLayerOpen, setIsLayerOpen] = useState(false);

  const toggleOverlay = () => { setIsLayerOpen(!isLayerOpen) };

  return (
    <div>
      <button
        type='button'
        className='btn'
        onClick={toggleOverlay} 
      >
        {t("hello.btn")}
      </button>
    
      <Dialog open={isLayerOpen} onClose={toggleOverlay} className="relative z-50">
        <div className="fixed inset-0 bg-[var(--background)] fade-in z-49" aria-hidden="true" />
        <Dialog.Panel className="w-[100vw] h-[100vh] fixed inset-0 flex flex-col items-center justify-center">
          <Dialog.Title className="text-xl md:text-2xl">{t("hello.p")}</Dialog.Title>

          <Dialog.Description>
            <a 
              href="mailto:inozemtsevco@gmail.com" 
              className="email-link relative font-medium text-2xl md:text-8xl transition hover:no-underline hover-underline-animation"
            >
              inozemtsevco@gmail.com
            </a>
          </Dialog.Description>

          <button type="button" className="absolute right-10 md:right-[88px] top-10 md:top-[54px]" onClick={toggleOverlay}>
            <svg width="36" height="36" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.3369 20.5576L40.299 38.7377" stroke="#FFFFFE" strokeLinecap="round" />
              <path d="M21.2305 39.6254L39.4106 19.6633" stroke="#FFFFFE" strokeLinecap="round" />
              <rect x="0.5" y="0.5" width="60" height="60" rx="30" stroke="#FFFFFE" />
            </svg>
          </button>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default SayHello;
