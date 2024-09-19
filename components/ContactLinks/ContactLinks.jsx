"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faBehance,
  faInstagram,
  faLinkedinIn,
  faThreads,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";


// Map your icon names to the actual FontAwesome icon objects
const iconMap = {
  google: faGoogle,
  behance: faBehance,
  instagram: faInstagram,
  linkedin: faLinkedinIn,
  threads: faThreads,
  dribbble: faDribbble,
};

const MEDIA_LINKS = [
  {
    name: "google",
    href: "mailto:inozemtsevco@gmail.com",
  },
  {
    name: "behance",
    href: "https://www.behance.net/ivaninozemcev",
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/inozemtsevco/",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/inozemtsevco/",
  },
  {
    name: "threads",
    href: "https://www.threads.net/@inozemtsevco",
  },
  {
    name: "dribbble",
    href: "https://dribbble.com/Bluntcath23",
  },
];

const ContactLinks = () => {
  return (
    <div className='flex flex-wrap gap-4'>
      {MEDIA_LINKS.map(({ name, href }) => (
        <a
          key={name}
          href={href}
          target='_blank'
          rel='noreferrer'
          title={`Ivan's ${name}`}
          className='w-[38px] h-[38px] flex justify-center items-center rounded-[50%] bg-[var(--color-gray-dark)] text-[var(--background)] hover:text-[var(---color-white)] transition'
        >
          <FontAwesomeIcon icon={iconMap[name]} />
        </a>
      ))}
    </div>
  );
};

export default ContactLinks;
