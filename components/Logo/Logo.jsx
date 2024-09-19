import Link from "next/link";

const logoImg = (width, height) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 50 64'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M2.86094 3.84H28.1409V4.4H21.7409V59.36H28.1409V60H2.86094V59.36H9.26094V4.4H2.86094V3.84Z'
      fill='white'
    />
    <circle cx='42.5' cy='52.5' r='7.5' fill='white' />
  </svg>
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
          {logoImg(50, 64)}
        </Link>
      ) : (
        logoImg(30, 38)
      )}
    </>
  );
};

export default Logo;
