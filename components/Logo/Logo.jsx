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
    // sizes="(max-width: 1200px) 100vw, (max-width: 1200px) 50vw, 33vw" //TODO:
  />
);

const Logo = ({ isClickable = false }) => {

  const handleLogoClick = () => {
    if (window.scrollY === 0) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sizes = {
    width: 23,
    height: 44,
  }

  return (
    <>
      {isClickable ? (
        <div className=''>
          <Link
            href='/'
            className='block cursor-pointer uppercase'
            onClick={handleLogoClick}
          >
            Ivan Inozemtsev
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
