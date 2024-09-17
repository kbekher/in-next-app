export const MEDIA_LINKS = [
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
    name: "linkedin-in",
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
    <div className="flex flex-wrap gap-4">
      {MEDIA_LINKS.map(({ name, href }) => (
        <a
          key={name}
          href={href}
          target='_blank'
          rel='noreferrer'
          title={`Ivan's ${name}`}
          className='w-[38px] h-[38px]'
        >
          <i className={`fa-brands fa-${name}`}></i>
        </a>
      ))}
    </div>
  );
};

export default ContactLinks;
