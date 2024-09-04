import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className='flex justify-center gap-3 '>
        <li className="btn w-[110px] flex justify-center">
          <a href='#about'>
            About me
          </a>
        </li>
        <li className="btn w-[110px] flex justify-center">
          <a href='#work'>
            Portfolio
          </a>
        </li>
        <li className="btn w-[110px] flex justify-center">
          <a href='#connect'>
            Connect
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
