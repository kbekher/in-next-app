import { throttle } from 'lodash';
import { createContext, useState, useEffect } from 'react';

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasLinkedFirstSection, setHasLinkedFirstSection] = useState(false);
  const [isHashNavigating, setIsHashNavigating] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      // Prevent state updates if hash navigation is in progress
      if (isHashNavigating) return;

      const currentScrollY = window.scrollY;

      // remove hash at the top of the page
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

        if (isShrunk && !hasLinkedFirstSection) {
          setHasLinkedFirstSection(true); // Prevent repeated triggers

          // Auto-scroll to the first section
          const firstSection = document.getElementById("work");
          // If click on navlink - don;t force scroll
          if (!window.location.hash) {
            firstSection.scrollIntoView({
              behavior: "smooth",
              // block: "start",
            });
          }
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
  }, [lastScrollY, isHashNavigating]); // Dependencies ensure updates are handled properly

  useEffect(() => {
    // Handle hash navigation
    const handleHashChange = () => {
      setIsHashNavigating(true);

      // Wait for the scroll to complete before re-enabling state updates
      setTimeout(() => {
        setIsHashNavigating(false);
      }, 1000); // Adjust timeout as needed for longer/shorter scroll durations
    };

    // Listen for hashchange events
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <HeaderContext.Provider
      value={{ isShrunk, setIsShrunk, scrollDirection }}>
      {children}
    </HeaderContext.Provider>
  );
};