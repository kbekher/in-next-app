import { createContext, useState, useEffect } from 'react';

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null); 
  const [lastScrollY, setLastScrollY] = useState(0); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update isShrunk
      if (currentScrollY > 100) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      // Update lastScrollY
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Dependency on lastScrollY

  return (
    <HeaderContext.Provider value={{ isShrunk, setIsShrunk, scrollDirection }}>
      {children}
    </HeaderContext.Provider>
  );
};