import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'next-i18next';

import Logo from "../Logo/Logo";
import LangToggle from "../LangToggle/LangToggle";

const Header = ({ onMenuToggle }) => {
  const { t } = useTranslation('common');
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <header className='fixed top-0 left-0 right-0 w-full py-4 z-50 mix-blend-difference text-[var(--color-white)]'> 
      <div className="grid grid-cols-2 md:grid-cols-12 px-5">
        {/* Left - Logo (cols 1-3) */}
        <div className="md:col-span-3">
          <Logo isClickable />
        </div>

        {/* Center - Title and Location (cols 4-9) */}
        <div className='md:col-start-8 md:col-span-3 flex flex-col'>
          <span className='uppercase'>{t("about.p4")}</span>
          <span className='uppercase text-[var(--color-gray)]'>{t("about.p5")}</span>
        </div>

        {/* Right - Language and Menu (cols 10-12) */}
        {!isMobile && (
          <div className="md:col-start-11 md:col-span-2 h-full flex justify-between gap-6">
            <LangToggle />
            <button
              type='button'
              className='uppercase flex'
              onClick={onMenuToggle}
            >
              {t("menu.btn")}
            </button>
          </div>
        )}
      </div>
    </header>
  )
};

export default Header;