import { useContext } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { navLinks } from "@/constants";
import { HeaderContext } from "@/context/HeaderContext";

const Navbar = () => {
  const { t } = useTranslation("common");
  const { isShrunk } = useContext(HeaderContext);

  return (
    <nav>
      <ul className={`flex justify-center flex-wrap ${isShrunk ? 'gap-10' : 'gap-3 md:gap-8'}`}>
        {navLinks.map((navLink) => (
          <li className={`${isShrunk ? 'btn--shrunk' : 'btn'}`} key={navLink.id}>
            <Link href={`#${navLink.id}`}>{t(`nav.${navLink.id}`)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
