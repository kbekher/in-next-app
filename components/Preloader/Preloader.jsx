import Image from 'next/image';
import { DOMAIN } from "@/constants";

const Preloader = () => {
  return (
    <div>
      <Image
        src={`${DOMAIN}preloader.gif`} 
        alt='preloader logo'
        width={47}
        height={67}
        className="max-w-[47px] max-h-[67px] w-auto h-auto"
      />
    </div>
  )
}

export default Preloader
