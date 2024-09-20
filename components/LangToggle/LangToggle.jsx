import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const LangToggle = () => {
  const router = useRouter(); 
  const [checked, setChecked] = useState(false); 

  // Update checkbox state when the locale changes
  useEffect(() => {
    setChecked(router.locale === 'de');
  }, [router.locale]);

  const onToggleLanguageClick = () => {
    const newLocale = checked ? 'en' : 'de'; // Switch locale based on the current state
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
      <label 
        className='btn block w-[96px] cursor-pointer relative hover:bg-opacity-20'
        onClick={onToggleLanguageClick} // Handle the toggle click
      >
        <span className='absolute top-1/2 -translate-y-1/2 left-[1.4em] md:left-[1em]'>EN</span>
        <span className='absolute top-1/2 -translate-y-1/2 right-[1.4em] md:right-[1em] '>DE</span>
        <input 
          className='peer h-[1em] w-[1em] opacity-0' 
          id='' 
          name='' 
          type='checkbox'
          checked={checked} // Sync checkbox with locale
          onChange={() => setChecked(!checked)} // Sync checkbox state with click
        />
        <span className="absolute left-0 top-1/2 flex h-full w-[50%] -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(26,26,26, 0.5)] shadow-[inset_4px_4px_4px_0px_rgba(64,64,64,0.25),inset_-4px_-4px_4px_0px_rgba(16,16,16,0.3)] duration-300 peer-checked:left-[50%]">
          <span className='relative h-full w-full rounded-full'>
            <span className='absolute inset-[0.1em] rounded-full'></span>
          </span>
        </span>
      </label>
  );
};

export default LangToggle;
