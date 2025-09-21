import { mediaLinks } from "@/constants";

const ContactLinks = () => {
  return (
    <>
      {mediaLinks.map(({ name, href }) => (
        <a
          key={name}
          href={href}
          target='_blank'
          rel='noreferrer'
          title={`Ivan's ${name}`}
          className='text-[var(--color-gray)] text-link'
        >
          {name}
        </a>
      ))}
    </>
  );
};

export default ContactLinks;
