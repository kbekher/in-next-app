import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { DOMAIN } from "@/constants";
import { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} 
        transition={{ type: "tween" , ease: "easeOut", duration: 1.75 }}
        id="loader"
        className="absolute inset-0 z-[9999] bg-[var(--background)] flex justify-center items-center select-none"
      >
        <Image
          src={`${DOMAIN}preloader.gif`}
          alt="preloader logo"
          width={184}
          height={212}
          priority
          unoptimized
          className="max-w-[47px] max-h-[67px] w-auto h-auto"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
