import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { DOMAIN } from "@/constants";

const Preloader = ({ onComplete }) => {
  const [shouldShow, setShouldShow] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    let loadedCount = 0;
    let totalResources = 0;
    let resourcesLoaded = false;
    let minimumTimeElapsed = false;

    // Function to check if we can complete loading
    const checkCompletion = () => {
      if (resourcesLoaded && minimumTimeElapsed) {
        setTimeout(() => setShouldShow(false), 500); // Small delay for UX
      }
    };

    // Function to update progress
    const updateProgress = (increment = 0) => {
      loadedCount += increment;
      const progress = Math.min((loadedCount / totalResources) * 100, 100);
      setLoadingProgress(progress);
      
      // Mark resources as loaded when progress reaches 100%
      if (progress >= 100 && !resourcesLoaded) {
        resourcesLoaded = true;
        checkCompletion();
      }
    };

    // Set minimum loading time (2 seconds)
    const minimumTimeTimeout = setTimeout(() => {
      minimumTimeElapsed = true;
      checkCompletion();
    }, 1500);

    // Preload critical images and resources
    const preloadResources = async () => {
      // Determine optimal image size based on viewport and device pixel ratio
      const getOptimalImageSize = () => {
        const width = window.innerWidth;
        const devicePixelRatio = window.devicePixelRatio || 1;
        const effectiveWidth = width * devicePixelRatio;
        
        // Choose size based on effective width (considering high-DPI displays)
        if (effectiveWidth <= 640) return '640';
        if (effectiveWidth <= 828) return '828';
        if (effectiveWidth <= 1080) return '1080';
        return '1200';
      };

      const imageSize = getOptimalImageSize();
      
      const criticalImages = [
        `${DOMAIN}/preloader.gif`, // Preloader itself
        // Add project images that are above the fold - only load the size we need
        `${DOMAIN}/projects/andere-lab-1-${imageSize}.jpg`,
        `${DOMAIN}/projects/andere-lab-2-${imageSize}.jpg`,
      ];

      const allImages = [...criticalImages];
      totalResources = allImages.length + 2; // +2 for DOM ready and fonts

      // Check if DOM is ready
      if (document.readyState === 'complete') {
        updateProgress(1);
      } else {
        window.addEventListener('load', () => updateProgress(1));
      }

      // Check if fonts are loaded
      if (document.fonts) {
        document.fonts.ready.then(() => updateProgress(1));
      } else {
        updateProgress(1); // Fallback if fonts API not supported
      }

      // Preload images
      const imagePromises = allImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.onload = () => {
            updateProgress(1);
            resolve(src);
          };
          img.onerror = () => {
            updateProgress(1); // Still count as "loaded" to prevent hanging
            resolve(src);
          };
          img.src = src;
        });
      });

      // Wait for all images or timeout after 5 seconds
      const timeoutPromise = new Promise(resolve => {
        setTimeout(() => {
          // Force complete if taking too long
          setLoadingProgress(100);
          resolve('timeout');
        }, 5000);
      });

      await Promise.race([
        Promise.all(imagePromises),
        timeoutPromise
      ]);
    };

    preloadResources();

    return () => {
      clearTimeout(minimumTimeTimeout);
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
          className="absolute inset-0 z-[9999] bg-[var(--color-bg-menu)] flex flex-col justify-center items-center select-none"
        >
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <Image
              src={`${DOMAIN}/preloader.gif`}
              alt="preloader logo"
              width={184}
              height={212}
              priority
              unoptimized
              className="max-w-[47px] max-h-[67px] w-auto h-auto"
            />
            
            {/* Loading text */}
            <div className="text-center">
              
              {/* Progress bar */}
              <div className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
                />
              </div>
              
              {/* Progress percentage */}
              <p className="text-gray-400 text-xs mt-2">
                {Math.round(loadingProgress)}%
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
