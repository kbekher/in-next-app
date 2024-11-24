import { useTranslation } from 'next-i18next';
import Logo from '../Logo/Logo';
import ContactLinks from '../ContactLinks/ContactLinks';
import ContactForm from '../ContactForm/ContactForm';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className='max-w-1680 mx-auto px-5 pb-[260px] md:pb-[168px] lg:px-[80px] flex flex-col md:flex-row justify-between relative'>

      <div className='text-center md:text-left'>
        <h3 className='text-[40px] leading-[52px] md:text-[16px] md:leading-normal'>{t('footer.title')}</h3>
        <p className='mb-8'>{t('footer.description')}</p>
        
        <div className='absolute bottom-[160px] left-1/2 -translate-x-1/2 md:static md:translate-x-0 z-10'>
          <Logo />
        </div>
      </div>

      <div className='flex flex-col items-center md:items-end'>
        <ContactForm />
        <ContactLinks />
      </div>
    </footer>
  )
}

export default Footer;
