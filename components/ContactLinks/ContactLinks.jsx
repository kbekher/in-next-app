import { mediaLinks } from "@/constants";

const ContactLinks = ( { slice = -1 } ) => {
  return (
    <>
      {mediaLinks.slice(0, slice).map(({ name, href }) => (
        <a
          key={name}
          href={href}
          target='_blank'
          rel='noreferrer'
          title={`Ivan's ${name}`}
          className='text-[var(--color-gray)] text-link w-max'
        >
          {name}
        </a>
      ))}
    </>
  );
};

export default ContactLinks;
