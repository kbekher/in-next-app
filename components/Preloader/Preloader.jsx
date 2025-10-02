import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { DOMAIN } from "@/constants";

const Preloader = ({ onComplete }) => {
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // Preloader controls its own timing
    const loadingTimeout = setTimeout(() => {
      setShouldShow(false);
    }, 2000);

    return () => {
      clearTimeout(loadingTimeout);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  const handleAnimationComplete = () => {
    if (!shouldShow && onComplete) {
      onComplete();
    }
  };

  return (
    <AnimatePresence onExitComplete={handleAnimationComplete}>
      {shouldShow && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} 
          transition={{ type: "tween", ease: "easeOut", duration: 0.8 }}
          id="loader"
          className="absolute inset-0 z-[9999] bg-[var(--color-bg-menu)] flex justify-center items-center select-none"
        >
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.6 }}
          >
            {/* <span className="text-white text-2xl font-bold">
              Loading...
            </span> */}
            <Image
              src={`${DOMAIN}/preloader.gif`}
              alt="preloader logo"
              width={184}
              height={212}
              priority
              unoptimized
              className="max-w-[47px] max-h-[67px] w-auto h-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
