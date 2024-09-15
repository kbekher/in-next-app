"use client";

import Link from "next/link";
import Image from "next/image";
import logoPic from "./logo.svg";

const Logo = ({ width, height, isClickable = false }) => {
  const handleLogoClick = () => {
    if (!isClickable || window.scrollY === 0) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      href='/'
      className='w-[110px] cursor-auto'
      onClick={isClickable ? handleLogoClick : undefined}
    >
      <Image
        src={logoPic}
        alt="Ivan Inozemtsev's Logo"
        width={width}
        height={height}
        draggable='false'
        style={{
          objectFit: "contain",
          objectPosition: "center",
          cursor: isClickable ? "pointer" : "auto",
        }}
      />
    </Link>
  );
};

export default Logo;
