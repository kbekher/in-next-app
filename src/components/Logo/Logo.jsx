"use client";

import Image from "next/image";
import logoPic from "../../images/logo.png";

const Logo = ({ width, height, isClickable = false }) => {
  const handleLogoClick = () => {
    if (!isClickable || window.scrollY === 0) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className='max-w-max cursor-pointer'
      onClick={isClickable ? handleLogoClick : undefined}
    >
      <Image
        src={logoPic}
        alt="Ivan Inozemtsev's Logo"
        placeholder='blur'
        width={width}
        height={height}
        style={{
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
    </div>
  );
};

export default Logo;
