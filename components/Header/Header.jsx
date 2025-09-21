import { useMediaQuery } from 'react-responsive';

import Logo from "../Logo/Logo";
import SayHello from "../Menu/Menu";
import LangToggle from "../LangToggle/LangToggle";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <header className='fixed top-0 left-0 right-0 w-full h-[100px] z-50 bg-[var(--color-bg)] backdrop-blur-sm'>
      <div className="flex w-full h-full justify-between items-center px-6">

        <Logo isClickable />

        <div className='flex items-center space-between gap-10'>

          <div className='flex flex-col items-left'>
            <span className='uppercase'>UX/UI, Graphic Designer</span>
            <span className='uppercase text-[var(--color-gray)]'>Dortmund, Germany</span>
          </div>

          {!isMobile && <LangToggle />}
          {!isMobile && <SayHello />}
          
        </div>

      </div>
    </header>
  )
};

export default Header;