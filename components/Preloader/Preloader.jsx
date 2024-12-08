import Image from 'next/image';
import { DOMAIN } from "@/constants";

const Preloader = () => {
  return (
    <div>
      <Image 
        src={`${DOMAIN}preloader.gif`} 
        alt='preloader logo' 
        width={59}
        height={67}
        unoptimized
      />
    </div>
  )
}

export default Preloader
