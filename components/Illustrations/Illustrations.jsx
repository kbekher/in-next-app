import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
import { motion } from "framer-motion";

import { scaleIn } from "@/utils/motion";
import SectionWrapper from '@/hoc/SectionWrapper';

import Divider from "../Divider/Divider";

const IllustrationMobile = dynamic(() => import('./IllustrationMobile'), { ssr: false });
const IllustrationDesktop = dynamic(() => import('./IllustrationDesktop'), { ssr: false });

const Illustrations = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className='max-w-[1300px] mx-auto h-full pt-[130px] md:pt-[146px]'>

      <motion.div
        {...scaleIn(0.5)}
        className='px-5 md:px-[40px] mb-[120px]'
      >
        {isMobile ? <IllustrationMobile /> : <IllustrationDesktop />}
      </motion.div>

      <Divider />
    </section>
  );
}

export default SectionWrapper(Illustrations, "illustrations");