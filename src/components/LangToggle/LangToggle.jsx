// import React from 'react'
// import { useTranslation } from 'react-i18next';

// // import { LANGUAGES } from "../../constants/constants";

// import './LanguageToggle.scss';

// const LanguageToggle = () => {
//   const { i18n } = useTranslation();

//   const onChangeLang = (event) => {
//     const langCode = event.target.value;
//     i18n.changeLanguage(langCode);
//   };

//   return (
//     <div className="LanguageToggle" >
//       <label className="switch-button" htmlFor="switch">
//         <div className="switch-outer">
//           <input id="switch" type="checkbox" />

//           <span className={`button-toggle button-toggle${i18n.language === 'en' ? "--left" : "--right"}`}></span>

//           {LANGUAGES.map(({ code }) => (
//             <button
//               key={code}
//               type="button"
//               className={`button-lang button-lang--${code}`}
//               value={code}
//               onClick={onChangeLang}
//             >
//               {code}
//             </button>
//           ))}

//         </div>
//       </label>

//     </div>
//   );
// }

// export default LanguageToggle;
