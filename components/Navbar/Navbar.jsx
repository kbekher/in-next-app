import Link from "next/link";
import { useTranslation } from "next-i18next";
import { navLinks } from "@/constants";
import { HeaderContext } from "@/context/HeaderContext";
import { useContext } from "react";

const Navbar = () => {
  const { t } = useTranslation("common");
  const { isShrunk } = useContext(HeaderContext);

  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   console.log(section);

  //   if (section) {
  //     const sectionTop = section.offsetTop; // Get the top position of the section
  //     window.scrollTo({
  //       top: sectionTop,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <nav>
      <ul className={`flex justify-center flex-wrap ${isShrunk ? 'gap-10' : 'gap-3 md:gap-8'}`}>
        {navLinks.map((navLink) => (
          <li className={`${isShrunk ? 'btn--shrunk' : 'btn'}`} key={navLink.id}>
            <Link
              href={`#${navLink.id}`}
            // onClick={() => scrollToSection(navLink.id)}
            >{t(`nav.${navLink.id}`)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
