import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { debounce } from 'lodash';

import { HeaderContext } from "@/context/HeaderContext";

const LangToggle = () => {
  const router = useRouter();
  const { setIsShrunk } = useContext(HeaderContext);

  const [checked, setChecked] = useState(null); // Start with null to avoid mismatched UI

  useEffect(() => {
    // Update the checkbox state when the locale becomes available
    if (router.locale) {
      setChecked(router.locale === 'de');
    }
  }, [router.locale]);

  const onToggleLanguageClick = debounce(() => {
    setIsShrunk(false);

    const newLocale = checked ? 'en' : 'de'; // Switch locale based on the current state
    const { pathname, asPath, query } = router;

    // Remove the hash from asPath (if present)
    const hashIndex = asPath.indexOf('#');
    const basePath = hashIndex !== -1 ? asPath.substring(0, hashIndex) : asPath;

    // Construct the new URL with the updated locale
    const newUrl = `/${newLocale}${basePath.replace(`/${router.locale}`, '')}`;

    router.push({ pathname, query }, newUrl, { locale: newLocale });
  }, 300); // Debounce for 300ms

  // Don't render the component until the locale is available
  if (checked === null) {
    return null; 
  }

  return (
    <label
      className='btn block w-[92px] cursor-pointer relative hover:bg-opacity-20'
      onClick={onToggleLanguageClick} // Handle the toggle click
    >
      <span className='absolute top-1/2 -translate-y-1/2 left-[1.4em] md:left-[1.1em]'>EN</span>
      <span className='absolute top-1/2 -translate-y-1/2 right-[1.4em] md:right-[1.1em] '>DE</span>
      <input
        className='peer h-[1em] w-[1em] opacity-0'
        id=''
        name=''
        type='checkbox'
        checked={checked} // Sync checkbox with locale
        onChange={() => setChecked(!checked)} // Sync checkbox state with click
      />
      <span className="absolute left-0 top-1/2 flex h-full w-[54%] -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(26,26,26, 0.5)] shadow-[inset_4px_4px_4px_0px_rgba(64,64,64,0.25),inset_-4px_-4px_4px_0px_rgba(16,16,16,0.3)] duration-300 peer-checked:left-[46%]">
        <span className='relative h-full w-full rounded-full'>
          <span className='absolute inset-[0.1em] rounded-full'></span>
        </span>
      </span>
    </label>
  );
};

export default LangToggle;
