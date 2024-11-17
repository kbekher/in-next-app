import Image from "next/image";
import Link from "next/link";
import { DOMAIN } from "@/constants";

const positions = {
  fatboy: "top-0 left-0",
  people: "top-0 right-0",
  grinch: "bottom-0 left-0",
  books: "bottom-[-40px] right-10",
  christmas: "hidden lg:block top-10 left-[280px]",
};

const IllustrationImage = ({ name, behanceUrl, size = 200 }) => {
  const imageElement = (
    <Image
      width={size}
      height={size}
      className={`h-full md:h-auto w-full md:w-auto rounded-3xl object-cover ${!behanceUrl ? `md:absolute ${positions[name]}` : ''}`}
      src={`${DOMAIN}${name}.jpg`}
      alt={name}
    />
  );

  return behanceUrl ? (
    <Link href={behanceUrl} className={`md:absolute ${positions[name]}`}>
      {imageElement}
    </Link>
  ) : imageElement;
};

export default IllustrationImage