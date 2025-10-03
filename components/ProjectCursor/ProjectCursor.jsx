'use client';

import { useEffect } from 'react';
import useDeviceDetection from '@/hooks/useDeviceDetection';

const ProjectCursor = () => {
  const deviceType = useDeviceDetection();

  useEffect(() => {
    // Only run on desktop
    if (deviceType !== 'Desktop') return;

    const handleMouseMove = (e) => {
      const projectLinks = document.querySelectorAll('.project-link');
      
      projectLinks.forEach(link => {
        const rect = link.getBoundingClientRect();
        const isHovering = (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );

        if (isHovering) {
          // Position the pseudo-element cursor
          link.style.setProperty('--cursor-x', `${e.clientX}px`);
          link.style.setProperty('--cursor-y', `${e.clientY}px`);
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [deviceType]);

  return null; // This component doesn't render anything
};

export default ProjectCursor;
