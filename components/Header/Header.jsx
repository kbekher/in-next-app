import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';

const HeaderMobile = dynamic(() => import('./HeaderMobile'), { ssr: false });
const HeaderDesktop = dynamic(() => import('./HeaderDesktop'), { ssr: false });

const Header = ({ isShrunk }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return isDesktop ? <HeaderDesktop /> : <HeaderMobile />;
};

export default Header;