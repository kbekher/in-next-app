"use client";

import { useEffect, useRef, useCallback, useMemo } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { DOMAIN, projects } from "@/constants";
import Divider from "../Divider/Divider";
import { useMediaQuery } from "react-responsive";

const ProjectVideo = ({ name, assets }) => {
  const videoRef = useRef(null);
  const isDesktop = useMediaQuery({ minWidth: 768 });

  // Avoid SSR issues by defaulting to `assets[0]` before hydration
  const videoSrc = useMemo(
    () => (isDesktop && name === "xtrafit" ? assets[1] : assets[0]),
    [isDesktop, name, assets]
  );

  const handleScroll = useCallback(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const videoRect = videoElement.getBoundingClientRect();
    const midpoint = videoRect.top + videoRect.height / 2;

    const isMidpointVisible =
      midpoint >= window.innerHeight / 2 - 60 &&
      midpoint <= window.innerHeight / 2 + 60;

    const isInViewport =
      videoRect.top < window.innerHeight && videoRect.bottom > 0;

    if (isInViewport || isMidpointVisible) {
      // Ensure video starts if it's visible
      if (videoElement.paused || videoElement.currentTime === 0) {
        videoElement.currentTime = 0;
        videoElement.play();
      }
    }
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.currentTime = 0;
      videoElement.load();
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [videoSrc, handleScroll]);

  return (
    <div className="project-video">
      <video
        ref={videoRef}
        src={`${DOMAIN}${videoSrc}`}
        className="w-full h-auto scale-[1.5]"
        muted
        playsInline
        loop={false}
      />
    </div>
  );
};

const ProjectGallery = ({ name, assets }) => {
  const imgClass = 'w-full h-full rounded-[var(--border-radius)]';

  const gridConfig = useMemo(
    () => ({
      flowtech: {
        container: 'max-h-[218px] md:max-h-[366px] grid grid-cols-3 md:grid-cols-8 grid-rows-2 md:grid-rows-6 gap-3 md:gap-4',
        items: [
          { src: assets[3], wrapperClass: 'col-start-1 row-start-1 col-span-2 md:col-span-5 row-span-2' },
          { src: assets[2], wrapperClass: 'hidden md:block col-span-3 row-span-3' },
          { src: assets[0], wrapperClass: 'col-start-3 md:col-start-6 row-start-1 col-span-1 md:col-span-3 row-span-1 md:row-span-3' },
          { src: assets[5], wrapperClass: 'hidden md:block col-start-1 col-span-3 row-start-3 row-span-2', extraClass: 'object-contain bg-[#373A39]' },
          { src: assets[4], wrapperClass: 'hidden md:block col-start-1 col-span-3 row-start-5 row-span-2', extraClass: ' object-contain bg-[#D9D9D9]' },
          { src: assets[1], wrapperClass: 'col-start-3 md:col-start-4 col-span-1 md:col-span-2 row-start-2 md:row-start-3 row-span-1 md:row-span-4' },
        ],
      },
      paysera: {
        container: 'max-h-[274px] md:max-h-[416px] grid grid-cols-2 md:grid-cols-8 grid-rows-4 md:[grid-template-rows:1fr_169px_1fr] gap-3 md:gap-4',
        items: [
          { src: assets[1], wrapperClass: 'col-start-1 row-start-1 md:col-span-4' },
          { src: assets[0], wrapperClass: 'row-start-3 md:row-start-1 md:col-span-4 row-span-2 md:row-span-1' },
          { src: assets[2], wrapperClass: 'md:col-start-6 md:col-span-3 row-span-3 md:row-span-2' },
          { src: assets[4], wrapperClass: 'col-start-1 row-start-2 md:col-span-3', extraClass: ' object-contain bg-black' },
          { src: assets[5], wrapperClass: 'hidden md:block col-span-5', extraClass: 'object-contain bg-white' },
          { src: assets[3], wrapperClass: 'md:row-start-2 md:col-start-4 md:col-span-2', extraClass: 'object-contain bg-white' },
        ],
      },
    }),
    [assets]
  );

  const { container, items } = gridConfig[name] || {};

  return (
    <div className={container}>
      {items.map(({ src, wrapperClass, extraClass }) => (
        <div key={src} className={`h-auto ${wrapperClass}`}>
          <Image
            width={200}
            height={200}
            className={`${imgClass} ${extraClass || 'object-cover'}`}
            src={`${DOMAIN}${src}`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

const Project = ({ type, name }) => {
  const { t } = useTranslation("common");
  const project = projects.find(project => project.name === name);

  if (!project) return null;

  const { assetsUrls, behanceUrl } = project;

  return (
    <section className='md:grid md:grid-cols-12 gap-4 max-w-[1100px] m-auto h-full pt-[130px] md:pt-[220px]'>
      <div className="col-start-3 col-span-8">

        <div className='px-5 md:px-0 mb-[120px]'>
          <h2 className='m-auto text-[36px] md:text-[48px] leading-tight mb-6 md:mb-8 text-center'>
            {t(`projects.${name}.title`)}
          </h2>

          <div className='mx-auto mb-6 md:mb-8'>
            {type === "ux" ? (
              <ProjectVideo name={name} assets={assetsUrls} />
            ) : (
              <ProjectGallery name={name} assets={assetsUrls} />
            )}
          </div>

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
        </div>

        <Divider />

      </div>
    </section>
  );
};

export default Project;