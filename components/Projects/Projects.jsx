import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';

import SectionWrapper from '@/hoc/SectionWrapper';
import { DOMAIN, projects } from '@/constants';
import imageLoader from '@/utils/image-loader';

const Project = ({ project, index }) => {
  const { t } = useTranslation('common');
  const { type, name, year, assetsUrls, behanceUrl } = project;

  return (
    <div
      id={name}
      className={`flex flex-col gap-2 md:gap-3 mb-8 border-t border-[var(--color-gray-border)] ${index === 0 ? 'pt-3 md:pt-4' : 'pt-[22px] md:pt-[28px]'}`}
    >
      {/* Img Section */}
      <Link href={behanceUrl} target='_blank' className='project-link'>
        <div className='flex flex-col md:flex-row gap-2 md:gap-5'>
          {assetsUrls.map(asset => (
            <div key={asset} className='w-full'>
              <Image
                src={`${DOMAIN}/projects/${asset}.jpg`}
                alt={`${name} project image`}
                width={600}
                height={800}
                sizes={assetsUrls.length === 1 ? "100vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw"}
                className='w-full h-auto object-cover'
                loader={imageLoader}
                priority={name === 'andere-lab'}
              />
            </div>
          ))}
        </div>
      </Link>

      {/* Text Section - Using Grid for better control on md+ */}
      <div className='flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-5 md:items-start'>
        {/* Project Title and Type */}
        <div className='md:col-span-3'>
          <Link href={behanceUrl} target='_blank' className='block w-max project-link'>
            <h2>{t(`projects.${name}.title`)}</h2>
          </Link>
          <p className='text-[var(--color-gray)]'>{t(`projects.types.${type}`)}</p>
        </div>

        {/* Project Description */}
        <div className='md:col-span-6'>
          <p className='text-[var(--color-gray)]'>{t(`projects.${name}.p`)}</p>
        </div>

        {/* Year */}
        <div className='md:col-span-3 md:text-right'>
          <p>{year}</p>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div>
      <h1 className='text-left uppercase pb-2'>
        <span className='text-[var(--color-gray)]'>From</span> Design <span className='text-[var(--color-gray)]'>to</span> Impossible.
      </h1>
      <div className='flex flex-col gap-[60px]'>
        {projects.map((project, index) => (
          <Project project={project} key={project.id} index={index} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Projects, "work");
