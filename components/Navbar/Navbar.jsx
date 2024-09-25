import Link from "next/link";
import { useTranslation } from "next-i18next";
import { navLinks } from "@/constants";

const Navbar = () => {
  const { t } = useTranslation("common");

  return (
    <nav>
      <ul className='flex justify-center gap-3 flex-wrap'>
        {navLinks.map((navLink) => (
          <li
            className='btn w-[96px] md:w-auto md:min-w-[110px] flex justify-center'
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
