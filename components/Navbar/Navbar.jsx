import Link from "next/link";
import { useTranslation } from "next-i18next";
import { navLinks } from "@/constants";

const Navbar = () => {
  const { t } = useTranslation("common");

  return (
    <nav>
      <ul className='flex justify-center gap-3 md:gap-8 flex-wrap'>
        {navLinks.map((navLink) => (
          <li
            className='btn'
            key={navLink.id}
          >
            <Link href={`#${navLink.id}`}>{t(`nav.${navLink.id}`)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
