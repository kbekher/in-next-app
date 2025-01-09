import Image from 'next/image';
import { motion } from 'framer-motion';

import { DOMAIN } from "@/constants";
import { useEffect } from 'react';

const Preloader = ({ onTransitionEnd, isLoading }) => {
  useEffect(() => {
    const overflowValue = isLoading ? "hidden" : "";
    document.documentElement.style.overflow = overflowValue;
    document.body.style.overflow = overflowValue;

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    isLoading && (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ type: "tween", ease: "easeOut", delay: 1.65 }}
        id="loader"
        className="absolute inset-0 z-[9999] bg-[var(--background)] flex justify-center items-center"
        onTransitionEnd={onTransitionEnd} // Trigger the callback when the transition ends
      >
        <Image
          src={`${DOMAIN}preloader.gif`}
          alt="preloader logo"
          width={47}
          height={67}
          className="max-w-[47px] max-h-[67px] w-auto h-auto"
        />
      </motion.div>
    )
  );
};

export default Preloader;
