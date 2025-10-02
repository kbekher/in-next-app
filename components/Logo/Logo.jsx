import Link from "next/link";
import Image from "next/image";

const Logo = ({ isClickable = false }) => {

  const handleLogoClick = () => {
    if (window.scrollY === 0) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isClickable ? (
        <div className=''>
          <Link
            href='/'
            className='w-max block cursor-pointer uppercase'
            onClick={handleLogoClick}
          >
            Ivan Inozemtsev
          </Link>
        </div>
      ) : (
        <div className='flex justify-center md:block'>
          {/* <Image
            src='/logo.png'
            alt='Ivan Inozemtsev logo'
            width={30}
            height={30}
            draggable='false'
            // sizes="(max-width: 1200px) 100vw, (max-width: 1200px) 50vw, 33vw" //TODO:
          /> */}

          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M9 4C12.1696 4 14.7391 6.5695 14.7391 9.73913V26.9565C11.5695 26.9565 9 24.387 9 21.2174V4Z" fill="#040404" />
            <circle cx="18.1303" cy="24.0869" r="2.86957" fill="#040404" />
          </svg>
        </div>
      )}
    </>
  );
};

export default Logo;
