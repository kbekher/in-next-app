import SectionWrapper from '@/hoc/SectionWrapper';
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from "framer-motion";

import { HeaderContext } from "@/context/HeaderContext";
import { scrollFadeIn } from '@/utils/motion';

import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import SayHello from "../SayHello/SayHello";
import LangToggle from "../LangToggle/LangToggle";
import HeaderBg from "./HeaderBg";
import HeaderTitle from "./HeaderTitle";

const Header = () => {
  const { isShrunk, scrollDirection } = useContext(HeaderContext);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const layoutStyles = isMobile
    ? {
      container: isShrunk ? "py-1 pl-[32px]" : "pt-[60px] pb-[36px] px-5",
      bgUrl: "bg-mobile.mov",
      height: isShrunk ? "46px" : "100vh",
      width: isShrunk ? "calc(100vw - 40px)" : "100vw",
    }
    : {
      container: isShrunk
        ? "py-4 pl-[50px] pr-[28px]"
        : "pt-10 pb-[70px] px-20",
      bgUrl: "web-bg.webm",
      height: isShrunk ? "80px" : "100vh",
      width: isShrunk ? "calc(100vw - 160px)" : "100vw",
    };

  return (
    <header className='relative w-full h-screen'>
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
            height: layoutStyles.height,
            width: layoutStyles.width,
            transform: isShrunk ? "translateY(40px)" : "translateY(0px)",
          }}
          transition={{ type: "spring", duration: 1.5, stiffness: 150, damping: 20 }}
          className="h-full fixed top-0"
        >
          <div className={`relative h-full w-full flex flex-col ${layoutStyles.container}`}>
            {/* <HeaderBg url={layoutStyles.bgUrl} /> */}

            <div className="flex w-full justify-between items-center">
              <Logo isClickable />
              {!isMobile && <Navbar />}
              {!isMobile && <SayHello />}
            </div>

            <motion.div
              layout
              className={`${isShrunk ? 'hidden' : 'flex'} flex-col md:flex-row items-end justify-between flex-1 mt-5 md:mt-0 `}
            >

              <HeaderTitle />

              {!isMobile && (
                <div>
                  <motion.div {...scrollFadeIn(isShrunk, scrollDirection)} className='flex-grow'>
                    <LangToggle />
                  </motion.div>
                </div>
              )}

            </motion.div>

          </div>
        </motion.div>
      </motion.div>
    </header>
  )
};

export default SectionWrapper(Header, "header");