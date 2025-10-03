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
