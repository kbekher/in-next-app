"use client";

import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { projects } from "@/constants";
import Divider from "../Divider/Divider";

const ProjectGallery = ({ name, assets }) => {
  const domain = 'https://d3bxg96r07nwt6.cloudfront.net/';
  
  const imgClass = 'max-w-full rounded-lg object-cover';

  return name === 'flowtech' ? (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <Image width={700} height={193} className={`h-[193px] ${imgClass}`} src={`${domain}${assets[3]}.jpg`} alt="" />
        </div>

        <div className="grid gap-2 row-span-3">
          <div>
            <Image width={700} height={274} className={`h-[274px] ${imgClass}`} src={`${domain}${assets[2]}.jpg`}  alt="" />
          </div>
          <div className="row-span-2">
            <Image width={700} height={219} className={`h-[219px] ${imgClass}`} src={`${domain}${assets[0]}.jpg`}  alt="" />
          </div>
        </div>

        <div className="grid gap-2 row-span-2">
          <div>
            <Image width={700} height={150} className={`h-[147px] ${imgClass}`} src={`${domain}${assets[5]}.jpg`}  alt="" />
          </div>
          <div>
            <Image width={700} height={150} className={`h-[137px] ${imgClass}`} src={`${domain}${assets[4]}.jpg`}  alt="" />
          </div>
        </div>

        <div className="row-start-2 row-end-3 col-start-2 col-end-3">
          <Image width={700} height={300} className={`h-[300px] ${imgClass}`} src={`${domain}${assets[1]}.jpg`}  alt="" />
        </div>
      </div>
    </div>) : <div>{name}</div>;
};


const Project = ({ type, name }) => {
  const { t } = useTranslation("common");
  const project = projects.find(project => project.name === name);
  const { assetsUrls, behanceUrl } = project;
  const videoRef = useRef(null);

  const isDesktop = useMediaQuery({ minWidth: 768 });
  const videoSrc = isDesktop ? assetsUrls[0] : assetsUrls[1];

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    let hasPlayed = false;

    const observer = new IntersectionObserver((entries) => { //TODO: try to avoid observer
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasPlayed) {
          videoElement.play(); // Play the video when in view for the first time
          hasPlayed = true;
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.5 // Adjust threshold to trigger based on how much of the element is visible
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (observer && videoElement) {
        observer.disconnect();
      }
    };
  }, []);


  return (
    <section className='max-w-[1300px] m-auto h-full pt-[130px] md:pt-[220px]'>
      <div className='px-5 md:px-[200px] mb-[120px]'>
        <h2 className='m-auto text-[36px] md:text-[48px] leading-tight mb-6 md:mb-8 text-center'>
          {t(`projects.${name}.title`)}
        </h2>

        <div className='mx-auto mb-6 md:mb-8'>
          {type === "ux" && videoSrc ? (
            // <ProjectVideo src={videoSrc} />
            <video
              ref={videoRef}
              src={`https://inozemtsev-portfolio.s3.-1.amazonaws.com/${videoSrc}`}
              className="w-full h-auto"
              muted
              playsInline
              loop={false} // Play only once
            />
          ) : (
            <ProjectGallery name={name} assets={project.assetsUrls} />
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
    </section>
  );
};

export default Project;