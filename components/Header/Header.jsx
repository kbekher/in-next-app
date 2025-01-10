import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';

const HeaderMobile = dynamic(() => import('./HeaderMobile'), { ssr: false });
const HeaderDesktop = dynamic(() => import('./HeaderDesktop'), { ssr: false });

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

export default Header;