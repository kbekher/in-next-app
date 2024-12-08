import Image from 'next/image';
import { DOMAIN } from "@/constants";

const Preloader = () => {
  return (
    <div>
      <Image 
        src={`${DOMAIN}preloader.gif`} 
        alt='preloader logo' 
        width={39}
        height={56}
      />

    </div>
  )
}

export default Preloader
