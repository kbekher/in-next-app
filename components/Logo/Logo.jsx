import Link from "next/link";
import Image from "next/image";
import { DOMAIN } from "@/constants";

const LogoImg = (width, height) => (
  <Image
    src={`${DOMAIN}logo-new.png`}
    alt='Ivan Inozemtsev logo'
    width={width}
    height={height}
    draggable='false'
  />
);

const Logo = ({ isClickable = false }) => {
  const handleLogoClick = () => {
    if (!isClickable || window.scrollY === 0) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isClickable ? (
        <Link
          href='/'
          className='w-[110px] cursor-pointer'
          onClick={handleLogoClick}
        >
          {LogoImg(30, 57)}
        </Link>
      ) : (
        LogoImg(30, 57)
      )}
    </>
  );
};

export default Logo;
