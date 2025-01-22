import { throttle } from 'lodash';
import { createContext, useState, useEffect } from 'react';

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasLinkedFirstSection, setHasLinkedFirstSection] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {

      // console.log(isShrunk, hasLinkedFirstSection);

      const currentScrollY = window.scrollY;

      // Remove hash at the top of the page
      if (currentScrollY === 0) {
        history.replaceState(null, '', window.location.pathname);
      }

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

        // Auto-scroll to the first section on first scroll down only
        if (isShrunk && !hasLinkedFirstSection) {
          const firstSection = document.getElementById("work");

          // console.log('Trigger scroll');

          firstSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          setHasLinkedFirstSection(true);
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
  }, [lastScrollY, isShrunk, hasLinkedFirstSection]); // Add dependencies

  useEffect(() => {
    // Handle clicks on nav links to prevent forced auto-scroll
    const handleHashChange = () => {
      setHasLinkedFirstSection(true);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <HeaderContext.Provider value={{ isShrunk, setIsShrunk, scrollDirection }}>
      {children}
    </HeaderContext.Provider>
  );
};
