import Link from "next/link";
import Image from "next/image";
import { DOMAIN } from "@/constants";

const LogoImg = (width, height) => (
  <Image
    src={`${DOMAIN}logo-new-1.png`}
    alt='Ivan Inozemtsev logo'
    width={width}
    height={height}
    draggable='false'
  //  sizes="(max-width: 1200px) 100vw, (max-width: 1200px) 50vw, 33vw" //TODO:
  />
);

const Logo = ({ isClickable = false, isShrunk = false }) => {
  const handleLogoClick = () => {
    if (!isClickable || window.scrollY === 0) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const sizes = {
    width: isShrunk ? 18 : 23,
    height: isShrunk ? 35 : 44,
  }

  return (
    <>
      {isClickable ? (
        <Link
          href='/'
          className='w-[110px] cursor-pointer'
          onClick={handleLogoClick}
        >
          {LogoImg(sizes.width, sizes.height)}
          {/* {LogoImg(30, 57)} */}
        </Link>
      ) : (
        LogoImg(sizes.width, sizes.height)
      )}
    </>
  );
};

export default Logo;
