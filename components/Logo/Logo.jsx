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
          {LogoImg(23, 44)}
          {/* {LogoImg(30, 57)} */}
        </Link>
      ) : (
        LogoImg(23, 44)
      )}
    </>
  );
};

export default Logo;
