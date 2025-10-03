import Image from "next/image";
import logoImage from '/public/logo.png';

const Logo = ({ isClickable = false }) => {

  const handleLogoClick = () => {
    if (window.scrollY === 0) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isClickable ? (
        <div className=''>
          <button
            type='button'
            className='w-max block cursor-pointer uppercase'
            onClick={handleLogoClick}
          >
            Ivan Inozemtsev
          </button>
        </div>
      ) : (
        <div className='flex justify-center md:block'>
          <Image src={logoImage} alt="Logo" width={40} height={40} unoptimized />
        </div>
      )}
    </>
  );
};

export default Logo;
