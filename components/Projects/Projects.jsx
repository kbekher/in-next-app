import React from 'react';

import SectionWrapper from '@/hoc/SectionWrapper';
import { DOMAIN, projects } from '@/constants';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Project = ({ project }) => {
  const { t } = useTranslation('common');
  const { type, name, year, assetsUrls, behanceUrl } = project;

  return (
    <div className='flex flex-col gap-2 md:gap-3 mb-8'>
      {/* Img Section */}
      <div className='flex flex-col md:flex-row gap-2 md:gap-5'>
        {assetsUrls.map(asset => (
          <div key={asset} className='w-full'>
            <Image
              src={`${DOMAIN}/projects/${asset}.jpg`}
              alt={`${name} project image`}
              width={600}
              height={800}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className='w-full h-auto object-cover'
              // loader={imageLoader}
              priority={name === 'andere-lab'}
            />
          </div>
        ))}
      </div>

      {/* Text Section - Using Grid for better control on md+ */}
      <div className='flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-5 md:items-start'>
        {/* Project Title and Type */}
        <div className='md:col-span-3'>
          <h2 className='text-[16px] font-medium'>{t(`projects.${name}.title`)}</h2>
          <p className='text-[14px] text-[var(--color-gray)]'>{t(`projects.types.${type}`)}</p>
        </div>
        
        {/* Project Description */}
        <div className='md:col-span-6'>
          <p className='text-[14px] text-[var(--color-gray)]'>{t(`projects.${name}.p`)}</p>
        </div>
        
        {/* Year */}
        <div className='md:col-span-3 md:text-right'>
          <p className='text-[14px]'>{year}</p>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div id="work">
      <h1 className='text-left uppercase'>
        <span className='text-[var(--color-gray)]'>From</span> 
        Design 
        <span className='text-[var(--color-gray)]'>to</span> 
        Impossible.
      </h1>
      {projects.map(project => (
        <Project project={project} key={project.id} />
      ))}
    </div>
  )
}

export default SectionWrapper(Projects, "work");
