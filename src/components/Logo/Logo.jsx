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
      className='w-[110px]'
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
          cursor: isClickable ? "pointer" : "auto",
        }}
      />
    </div>
  );
};

export default Logo;
