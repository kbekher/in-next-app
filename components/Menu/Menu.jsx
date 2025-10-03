'use client';

import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useMediaQuery } from 'react-responsive';
import { Dialog } from '@headlessui/react';
import Link from 'next/link';

import { mediaLinks, navLinks, projects } from '@/constants';
import Logo from '../Logo/Logo';
import LangToggle from '../LangToggle/LangToggle';
import ContactLinks from '../ContactLinks/ContactLinks';

const Menu = () => {
  const { t } = useTranslation('common');
  const [isLayerOpen, setIsLayerOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const toggleOverlay = () => { setIsLayerOpen(!isLayerOpen) };

  return (
    <div>
      <button
        type='button'
        className='uppercase'
        onClick={toggleOverlay}
      >
        {t("menu.btn")}
      </button>

      <Dialog open={isLayerOpen} onClose={toggleOverlay} className="relative z-50">
        <div className="fixed inset-0 bg-[var(--color-bg-menu)] z-49" aria-hidden="true" />
        <Dialog.Panel className="w-screen h-screen fixed inset-0 flex flex-col">

          {/* Header - Same as main header */}
          <header className='w-full py-4 text-[var(--color-white)]'>
            <div className="grid grid-cols-2 md:grid-cols-12 px-5 md:pr-8">

              {/* Left - Logo (cols 1-3) */}
              <div className="md:col-span-2">
                <div className="w-max" onClick={toggleOverlay}>
                  <Logo isClickable />
                </div>
              </div>

              {/* Center - Title and Location (cols 8-9) */}
              <div className='md:col-start-8 md:col-span-3 flex flex-col'>
                <span className='uppercase text-[var(--color-white)]'>UX/UI, Graphic Designer</span>
                <span className='uppercase text-[var(--color-gray)]'>Dortmund, Germany</span>
              </div>

              {/* Right - Language and Menu (cols 11-12) */}
              {!isMobile && (
                <div className="col-start-11 col-span-2 h-full flex justify-between gap-6">

                  <LangToggle />
                  <button
                    type="button"
                    className="uppercase h-max"
                    onClick={toggleOverlay}
                  >
                    {t("menu.btn")}
                  </button>
                </div>
              )}

            </div>
          </header>

          {/* Main Content Area */}
          <div className="flex-1 flex mt-8 md:mt-[140px] px-5">

            {/* Navigation Links - Table Style */}
            <div className="w-full">
              <div className="flex flex-col gap-10 md:grid grid-cols-12 gap-5">

                {/* Menu Column */}
                <div className='col-start-3 col-span-2'>
                  <h3 className="uppercase text-[var(--color-white)] mb-6">{t("menu.btn")}</h3>
                  <nav>
                    <ul className='flex flex-col justify-center flex-wrap gap-3 text-[var(--color-gray)]'>
                      {navLinks.map((navLink) => (
                        <li key={navLink.id}>
                          <Link
                            href={`#${navLink.id}`}
                            onClick={toggleOverlay}
                            className="text-link"
                          >
                            {t(`nav.${navLink.id}`)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Selected Work Column */}
                <div className='col-start-6 col-span-3'>
                  <h3 className="uppercase text-[var(--color-white)] mb-6">{t("menu.selected-work")}</h3>
                  <ul className="space-y-4 text-[var(--color-gray)]">
                    {projects.map((project) => (
                      <li key={project.name}>
                        <Link
                          href={`#${project.name}`}
                          onClick={toggleOverlay}
                          className="text-link"
                        >
                          {t(`projects.${project.name}.title`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Category Column */}
                {!isMobile && (
                  <div className='col-start-10 col-span-2'>
                    <h3 className="uppercase text-[var(--color-white)] mb-6">{t("menu.category")}</h3>
                    <ul className="space-y-4 text-[var(--color-gray)]">
                      {projects.map((project) => (
                        <li key={`${project.name}-type`} className="text-[var(--color-gray)]">
                          {t(`projects.types.${project.type}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Contact Column */}
                {isMobile && (
                  <div className='flex flex-col gap-2 col-span-3 lg:col-span-2'>
                    <span className='uppercase text-[var(--color-white)]'>Contact</span>
                    <a
                      href="mailto:inozemtsevco@gmail.com"
                      className='text-link text-[var(--color-gray)]'
                    >
                      inozemtsevco@gmail.com
                    </a>
                    {mediaLinks.slice(0, 2).map(({ name, href }) => (
                      <a
                        key={name}
                        href={href}
                        target='_blank'
                        rel='noreferrer'
                        title={`Ivan's ${name}`}
                        className='text-[var(--color-gray)] text-link'
                      >
                        {name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer - Desktop only */}
          {!isMobile && (
            <footer className='w-full px-5 pb-5 flex flex-row justify-between text-[14px]'>
              <div className='w-full grid grid-cols-12 gap-5 col-span-12 items-end text-[var(--color-gray)]'>
                {/* Left - Copyright and Logo */}
                <p className='col-span-2'>©2025</p>

                {/* Contact */}
                <div className='flex flex-col gap-2 col-span-3 lg:col-span-2'>
                  <span className='uppercase text-[var(--color-white)]'>Contact</span>
                  <a
                    href="mailto:inozemtsevco@gmail.com"
                    className='text-link'
                  >
                    inozemtsevco@gmail.com
                  </a>
                </div>

                <ContactLinks />
              </div>
            </footer>
          )}

          {/* Mobile Navbar - Mobile only */}
          {isMobile && (
            <div className='text-[var(--color-white)] px-5 pb-8'>
              <div className=' flex justify-between'>
                <LangToggle />
                <button
                  type="button"
                  className="uppercase btn"
                  onClick={toggleOverlay}
                >
                  {t("menu.btn")}
                </button>
              </div>
            </div>
          )}

        </Dialog.Panel>
      </Dialog>
    </div >
  );
};

export default Menu;
