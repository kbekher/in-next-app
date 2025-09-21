import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { debounce } from 'lodash';

const LangToggle = () => {
  const router = useRouter();

  const [checked, setChecked] = useState(null); // Start with null to avoid mismatched UI

  useEffect(() => {
    // Update the checkbox state when the locale becomes available
    if (router.locale) {
      setChecked(router.locale === 'de');
    }
  }, [router.locale]);

  const onToggleLanguageClick = debounce(() => {
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

  const languages = [
    { code: 'en', label: 'EN', isActive: !checked },
    { code: 'de', label: 'DE', isActive: checked }
  ];

  const baseClasses = 'cursor-pointer underline-offset-2 transition-all duration-200 ease';

  return (
    <div className='flex items-center gap-4 text-[16px]'>
      {languages.map(({ label, isActive }) => (
        <span
          key={label}
          onClick={onToggleLanguageClick}
          className={`${baseClasses} ${isActive ? 'underline' : 'hover:underline'}`}
        >
          {label}
        </span>
      ))}
    </div>
  );
};

export default LangToggle;
