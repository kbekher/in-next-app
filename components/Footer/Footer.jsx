import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import Logo from '../Logo/Logo';
import { navLinks } from '@/constants';
import ContactLinks from '../ContactLinks/ContactLinks';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <footer className='w-full px-5 text-[14px]'>
      <div className="grid grid-cols-12 gap-5 items-start">

        <div className='col-span-12 flex justify-between'>
          <n3 className='uppercase text-[16px]'>{t('h1')}</n3>
          <div className='flex flex-col gap-8'>
            <span className='uppercase'>Menu</span>

            <ul className='flex flex-col gap-3 text-[var(--color-gray)]'>
              {navLinks.map((navLink) => (
                <li key={navLink.id}>
                  <Link href={`#${navLink.id}`}>{t(`nav.${navLink.id}`)}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='col-span-12 grid grid-cols-12 gap-5 items-end'>

          {/* Left - Copyright and Logo */}
          <div className='col-span-2 flex flex-col'>
            <div className='mb-2'>
              <Logo />
            </div>
            <p className='text-[var(--color-gray)]'>©2025</p>
          </div>

          {/* Contact */}
          <div className='flex flex-col gap-2 col-span-3 lg:col-span-2'>
            <span className='uppercase'>Contact</span>
            <a
              href="mailto:inozemtsevco@gmail.com"
              className='text-[var(--color-gray)] text-link'
            >
              inozemtsevco@gmail.com
            </a>
          </div>

          <ContactLinks />
        </div>
      </div>
    </footer>
  )
}

export default Footer;
