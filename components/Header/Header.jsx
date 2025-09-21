import { useMediaQuery } from 'react-responsive';

import Logo from "../Logo/Logo";
import SayHello from "../Menu/Menu";
import LangToggle from "../LangToggle/LangToggle";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <header className='fixed top-0 left-0 right-0 w-full py-4 bg-[var(--color-bg)] backdrop-blur-sm z-50'>
      <div className="grid grid-cols-2 md:grid-cols-12 px-5">
        {/* Left - Logo (cols 1-3) */}
        <div className="md:col-span-3">
          <Logo isClickable />
        </div>

        {/* Center - Title and Location (cols 4-9) */}
        <div className='md:col-start-8 md:col-span-2 flex flex-col'>
          <span className='uppercase'>UX/UI, Graphic Designer</span>
          <span className='uppercase text-[var(--color-gray)]'>Dortmund, Germany</span>
        </div>

        {/* Right - Language and Menu (cols 10-12) */}
        {!isMobile && (
          <div className="md:col-start-11 md:col-span-2 h-full flex justify-between gap-6">
            <LangToggle />
            <SayHello />
          </div>
        )}
      </div>
    </header>
  )
};

export default Header;