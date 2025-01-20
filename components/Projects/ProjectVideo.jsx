import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

import { DOMAIN } from "@/constants";
import { scaleIn } from '@/utils/motion';

const ProjectVideo = ({ name, assets }) => {
  const videoRef = useRef(null);
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const [hasPlayed, setHasPlayed] = useState(false);

  // Ensure a consistent `videoSrc` during SSR
  const videoSrc = useMemo(() => {
    return isDesktop && name === "xtrafit" ? assets[1] : assets[0];
  }, [isDesktop, name, assets]);

  const handleEnter = (entry) => {
    // console.log(entry.isIntersecting);
    // console.log(entry.target);

    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (videoElement.paused && !hasPlayed) {
      videoElement.play();

      setHasPlayed(true);
    }
  }

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) videoElement.load();
    
  }, [videoSrc]);

  return (
    <motion.div
      {...scaleIn(1.5)}
      onViewportEnter={(entry) => handleEnter(entry)}
      className="project-video"
    >
      <video
        data-played={hasPlayed}
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
