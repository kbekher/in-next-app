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
        <div className='w-[110px] flex justify-center md:block'>
          <Image
            src='/logo.png'
            alt='Ivan Inozemtsev logo'
            width={30}
            height={30}
            draggable='false'
            // sizes="(max-width: 1200px) 100vw, (max-width: 1200px) 50vw, 33vw" //TODO:
          />
        </div>
      )}
    </>
  );
};

export default Logo;
