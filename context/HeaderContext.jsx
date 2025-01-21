import { throttle } from 'lodash';
import { createContext, useState, useEffect } from 'react';

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasLinkedFirstSection, setHasLinkedFirstSection] = useState(false);

  const scrollToFirstSection = () => {
    const firstSection = document.getElementById("work");
    // console.log('Trigger scroll') // TODO:

    if (firstSection) {
      firstSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;

      // Update isShrunk
      if (currentScrollY > 100) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
        setHasLinkedFirstSection(false);
      }

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');

        if (isShrunk && !hasLinkedFirstSection) {
          setHasLinkedFirstSection(true); // Prevent repeated triggers
          scrollToFirstSection(); // Auto-scroll to the first section
        }

      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      // Update lastScrollY
      setLastScrollY(currentScrollY);
    }, 200);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Dependencies ensure updates are handled properly

  return (
    <HeaderContext.Provider
      value={{ isShrunk, setIsShrunk, scrollDirection }}>
      {children}
    </HeaderContext.Provider>
  );
};