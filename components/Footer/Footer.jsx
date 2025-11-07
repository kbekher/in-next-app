import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import Logo from '../Logo/Logo';
import { navLinks } from '@/constants';
import ContactLinks from '../ContactLinks/ContactLinks';

const Footer = ({ onCookieSettings, onImpressum, onDatenschutzerklaerung }) => {
  const { t } = useTranslation('common');

  // Reusable components to avoid duplication
  const MenuSection = ({ className = "" }) => (
    <div className={`flex flex-col gap-3 w-full ${className}`}>
      <span className='uppercase'>Menu</span>
      <ul className='flex flex-col gap-3 text-[var(--color-gray)]'>
        {navLinks.map((navLink) => (
          <li key={navLink.id}>
            <Link href={`#${navLink.id}`} className="text-link">
              {t(`nav.${navLink.id}`)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const ContactSection = ({ className = "", mobile = false }) => (
    <div className={`flex flex-col gap-3 ${className}`}>
      <span className='uppercase'>Contact</span>
      <a
        href="mailto:inozemtsevco@gmail.com"
        className='text-[var(--color-gray)] text-link'
      >
        {mobile ? "Email" : "inozemtsevco@gmail.com"}
      </a>
    </div>
  );

  const LogoAndCopyright = ({ mobile = false }) => (
    mobile ? (
      <div className="grid grid-cols-1 gap-8 mt-[80px] justify-between items-end">
        <div className="flex flex-col gap-2 items-start justify-start">
          <Logo />
          <div>
            <p className='inline-block mr-2'>©2025</p>
            <p className='inline-block'>Ivan Inozemtsev</p>
          </div>
        </div>
      </div>
    ) : (
      <div className='col-span-2 flex flex-col'>
        <div className='mb-2'>
          <Logo />
        </div>
        <p className='text-[var(--color-gray)]'>©2025</p>
      </div>
    )
  );

  const CookieSettingsButton = ({ onCookieSettings }) => (
    <button
      onClick={onCookieSettings}
      className="text-[var(--color-gray)] text-link w-max"
    >
      {t('cookie-settings.btn')}
    </button>
  );

  const InformationSection = ({ mobile = false }) => (
    <div className={`flex flex-col gap-3 ${mobile ? 'w-full' : ''}`}>
      <span className='uppercase'>Informationen</span>
      <ul className='flex flex-col gap-3 text-[var(--color-gray)]'>
        <li>
          <button
            onClick={onImpressum}
            className="text-link w-max"
          >
            Impressum
          </button>
        </li>
        <li>
          <button
            onClick={onDatenschutzerklaerung}
            className="text-link w-max"
          >
            Datenschutzerklärung
          </button>
        </li>
        <li>
          <CookieSettingsButton onCookieSettings={onCookieSettings} />
        </li>
      </ul>
    </div>
  );

  return (
    <footer className='mx-5 pb-[82px] md:pb-4 border-t border-[var(--color-gray-border)] pt-[22px] md:pt-[44px]'>
      {/* Mobile Layout */}
      <div className="md:hidden space-y-8">
        <h3 className='uppercase'>{t('h1')}</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className='flex flex-col gap-8'>
            <MenuSection />
            <InformationSection mobile />
          </div>

          <div className='flex flex-col gap-3'>
            <ContactSection mobile />
            <div className='flex flex-col gap-3 text-[var(--color-gray)]'>
              <ContactLinks />
            </div>
          </div>
        </div>
        <LogoAndCopyright mobile />
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="grid grid-cols-12 gap-5 items-start">
          <div className='col-span-12 grid grid-cols-12 gap-5 flex justify-between'>
            <h3 className='uppercase col-start-1 col-span-4'>{t('h1')}</h3>
            {/* <div className="flex flex-col items-end gap-3">
              <div className='flex gap-3'> */}
            <MenuSection className='col-start-9 col-span-2' />
            <InformationSection className='col-start-11 col-span-2' />
            {/* 
              </div>
            </div> */}
          </div>

          <div className='col-span-12 grid grid-cols-12 gap-5 items-end'>
            {/* <LogoAndCopyright /> */}
            <Logo />
            <ContactSection className="col-span-3 lg:col-span-2 gap-2" />
            <ContactLinks />
            <div className="col-start-11 col-span-2">
              {/* <CookieSettingsButton onCookieSettings={onCookieSettings} />
               */}
              <p className='inline-block mr-2'>©2025</p>
              <p className='inline-block'>Ivan Inozemtsev</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
