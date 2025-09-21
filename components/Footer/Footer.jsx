import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import Logo from '../Logo/Logo';
import { navLinks } from '@/constants';
import ContactLinks from '../ContactLinks/ContactLinks';

const Footer = () => {
  const { t } = useTranslation('common');
  
  // Reusable components to avoid duplication
  const MenuSection = ({ className = "" }) => (
    <div className={`flex flex-col gap-3 ${className}`}>
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

  const ContactSection = ({ className = "" }) => (
    <div className={`flex flex-col gap-3 ${className}`}>
      <span className='uppercase'>Contact</span>
      <a
        href="mailto:inozemtsevco@gmail.com"
        className='text-[var(--color-gray)] text-link'
      >
        inozemtsevco@gmail.com
      </a>
    </div>
  );

  const LogoAndCopyright = ({ mobile = false }) => (
    mobile ? (
      <div className="grid grid-cols-2 gap-8 mt-[80px] justify-between items-end">
        <div className="flex justify-start">
          <Logo />
        </div>
        <p className="text-end">©2025</p>
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
  
  return (
    <footer className='w-full px-5 pb-[82px] md:pb-0'>
      
      {/* Mobile Layout */}
      <div className="md:hidden space-y-8">
        <h3 className='uppercase'>{t('h1')}</h3>
        
        <div className="grid grid-cols-2 gap-8">
          <MenuSection />
          <div className='flex flex-col gap-3'>
            <ContactSection />
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
          <div className='col-span-12 flex justify-between'>
            <h3 className='uppercase'>{t('h1')}</h3>
            <MenuSection />
          </div>

          <div className='col-span-12 grid grid-cols-12 gap-5 items-end'>
            <LogoAndCopyright />
            <ContactSection className="col-span-3 lg:col-span-2 gap-2" />
            <ContactLinks />
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer;
