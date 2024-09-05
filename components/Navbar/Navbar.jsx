import Link from "next/link";
import { useTranslation } from 'next-i18next'

const Navbar = () => {
  const { t } = useTranslation('common');

  return (
    <nav>
      <ul className='flex justify-center gap-3 '>
        <li className="btn w-[110px] flex justify-center">
        <Link href="#about">{t('nav.about')}</Link>
        </li>
        <li className="btn w-[110px] flex justify-center">
          <Link href="#work">{t('nav.portfolio')}</Link>
        </li>
        <li className="btn w-[110px] flex justify-center">
          <Link href="#connect">{t('nav.connect')}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;