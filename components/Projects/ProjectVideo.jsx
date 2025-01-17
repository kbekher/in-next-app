import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

import { DOMAIN } from "@/constants";
import { scaleIn } from '@/utils/motion';

const ProjectVideo = ({ name, assets }) => {
  const videoRef = useRef(null);

  const [isDesktop, setIsDesktop] = useState(false);
  const isDesktopQuery = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    setIsDesktop(isDesktopQuery);
  }, [isDesktopQuery]);

  // Ensure a consistent `videoSrc` during SSR
  const videoSrc = useMemo(() => {
    return isDesktop && name === "xtrafit" ? assets[1] : assets[0];
  }, [isDesktop, name, assets]);

  const handleScroll = useCallback(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const videoRect = videoElement.getBoundingClientRect();
    const midpoint = videoRect.top + videoRect.height / 2;

    const isMidpointVisible =
      midpoint >= window.innerHeight / 2 - 60 &&
      midpoint <= window.innerHeight / 2 + 60;

    const isInViewport =
      videoRect.top < window.innerHeight && videoRect.bottom > 0;

    if (isInViewport || isMidpointVisible) {
      if (videoElement.paused || videoElement.currentTime === 0) {
        videoElement.currentTime = 0;
        videoElement.play();
      }
    }
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.currentTime = 0;
      videoElement.load();
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); //,videoSrc

  return (
    <motion.div
      {...scaleIn(1.5)}
      className="project-video"
    >
      <video
        ref={videoRef}
        src={`${DOMAIN}${videoSrc}`}
        className="w-full h-auto scale-150"
        muted
        playsInline
        loop={false}
      />
    </motion.div>
  );
};
export default ProjectVideo;
