"use client";

import { useRef } from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { Element, scroller } from 'react-scroll';
import Link from "next/link";

import Divider from "../Divider/Divider";
import ProjectVideo from "./ProjectVideo";
import ProjectGallery from "./ProjectGallery";

import { projects } from "@/constants";
import { textVariant } from "@/utils/motion";

const Project = ({ type, name }) => {
  const { t } = useTranslation("common");
  const project = projects.find(project => project.name === name);

  if (!project) return null;

  const { assetsUrls, behanceUrl } = project;

  const ref = useRef(null);

  return (
    <Element>
      <motion.section
        onViewportEnter={() => {
          if (name === "ace-and-tate") {
            scroller.scrollTo(ref.current.id, {
              duration: 300,
              smooth: true,
              offset: -50, // Adjust for fixed headers if needed
            });
          }
          // console.log(ref.current.id);
        }}
        className='md:grid md:grid-cols-12 gap-4 max-w-[1100px] mx-auto h-full pt-[130px] md:pt-[146px]'
        ref={ref}
        id={name}
      >
        <div className="col-start-3 col-span-8">

          <div className='px-5 md:px-0 mb-[120px]'>
            <motion.h2
              {...textVariant("down")}
              className='mx-auto section-title mb-6 md:mb-8 text-center'
            >
              {t(`projects.${name}.title`)}
            </motion.h2>

            <div className='mx-auto mb-6 md:mb-8'>
              {type === "ux" ? (
                <ProjectVideo name={name} assets={assetsUrls} />
              ) : (
                <ProjectGallery name={name} assets={assetsUrls} />
              )}
            </div>


            <motion.div
              {...textVariant("up")}
            >
              <Link
                href={behanceUrl}
                target="_blank"
                className='w-max mx-auto mb-6 md:mb-10 flex justify-center gap-2 items-center mx-auto text-[14px] font-normal shadow-xl text-[var(--background)] bg-gray-50 backdrop-blur-md isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[var(--color-gray-dark)] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group'
              >
                {t(`buttons.behance`)}
                <svg
                  className='w-8 h-8 justify-end group-hover:rotate-90 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-gray-50 group-hover:bg-gray-50 p-2 rotate-45'
                  viewBox='0 0 16 19'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z'
                    className='fill-gray-800 group-hover:fill-gray-800'
                  />
                </svg>
              </Link>

              <p className='text-center text-[16px] md:text-[14px]'>{t(`projects.${name}.p`)}</p>
            </motion.div>
          </div>

          <Divider />

        </div>
      </motion.section>
    </Element>
  );
};

export default Project;