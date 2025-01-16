"use client";

import { useState, useContext } from "react";
import { motion } from "framer-motion";

import { HeaderContext } from "@/context/HeaderContext";

import Logo from "../Logo/Logo";
import HeaderBg from "./HeaderBg";
import HeaderTitle from "./HeaderTitle";

const HeaderMobile = () => {
  const { isShrunk } = useContext(HeaderContext);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween", ease: "easeInOut", duration: 1.75 }}
      className="relative w-full h-full flex justify-center items-center"
    >

      <motion.div
        layout
        initial={{ height: "100vh", width: "100vw", transform: "translateY(0px)" }}
        animate={{
          height: isShrunk ? "46px" : "100vh",
          width: isShrunk ? "calc(100vw - 40px)" : "100vw",
          transform: isShrunk ? "translateY(40px)" : "translateY(0px)",
        }}
        transition={{ type: "spring", duration: 3.5, stiffness: 200, damping: 40 }}
        className='h-full fixed top-0'
      >

        <div className={`relative h-full w-full flex flex-col ${isShrunk ? 'py-1 pl-[32px]' : 'pt-[60px] pb-[36px] px-5 '}`}>

          <HeaderBg url='bg-mobile.mov' />

          <div className='flex w-full justify-between items-center '>
            <Logo isClickable />
          </div>

          <div className='flex flex-col md:flex-row md:items-end justify-between flex-1 mt-5 md:mt-0'>
            <HeaderTitle />
          </div>

        </div>
      </motion.div>

    </motion.div>
  )
};

export default HeaderMobile;