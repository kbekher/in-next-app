import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';

import Divider from "../Divider/Divider";

const IllustrationMobile = dynamic(() => import('./IllustrationMobile'), { ssr: false });
const IllustrationDesktop = dynamic(() => import('./IllustrationDesktop'), { ssr: false });

const Illustrations = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className='max-w-[1300px] m-auto h-full pt-[130px] md:pt-[220px]'>

      <div className='px-5 md:px-[40px] mb-[120px]'>
        { isMobile ? <IllustrationMobile /> : <IllustrationDesktop /> }
      </div>

      <Divider />
    </section>
  );
}

export default Illustrations
