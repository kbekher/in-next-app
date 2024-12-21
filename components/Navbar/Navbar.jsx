import Link from "next/link";
import { useTranslation } from "next-i18next";
import { navLinks } from "@/constants";

const Navbar = ({ isShrunk = false }) => {
  const { t } = useTranslation("common");

  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //     // Update URL without hash
  //     history.replaceState(null, "", `/${sectionId}`);
  //   }
  // };

  return (
    <nav>
      <ul className={`flex justify-center flex-wrap ${isShrunk ? 'gap-10' : 'gap-3 md:gap-8'}`}>
        {navLinks.map((navLink) => (
          <li
            className={`${isShrunk ? 'btn--shrunk' : 'btn'}`}
            key={navLink.id}
          >
          {/* <button 
              onClick={() => scrollToSection(navLink.id)}
              className="focus:outline-none"
            >{t(`nav.${navLink.id}`)}</button> */}
            <Link href={`#${navLink.id}`}>{t(`nav.${navLink.id}`)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
