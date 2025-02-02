import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import { DOMAIN } from "@/constants";
import { HeaderContext } from "@/context/HeaderContext";

const LogoImg = (width, height) => (
  <Image
    src={`${DOMAIN}logo-new-1.png`}
    alt='Ivan Inozemtsev logo'
    width={width}
    height={height}
    draggable='false'
  // sizes="(max-width: 1200px) 100vw, (max-width: 1200px) 50vw, 33vw" //TODO:
  />
);

const Logo = ({ isClickable = false }) => {
  const { isShrunk } = useContext(HeaderContext);

  const handleLogoClick = () => {
    if (window.scrollY === 0) return;

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
        <div className='w-[110px]'>
          <Link
            href='/'
            className='block w-[24px] cursor-pointer'
            onClick={handleLogoClick}
          >
            {LogoImg(sizes.width, sizes.height)}
            {/* {LogoImg(30, 57)} */}
          </Link>
        </div>
      ) : (
        <div className='w-[110px] flex justify-center md:block'>
          {LogoImg(sizes.width, sizes.height)}
        </div>
      )}
    </>
  );
};

export default Logo;
