import { illustrations } from "@/constants";
import IllustrationImage from "./IllustrationImage";
import IllustrationTitle from "./IllustrationTitle";

const IllustrationDesktop = () => {
  return (
    <div
      className='relative min-h-[640px] w-full h-full flex items-center'>

      {illustrations.map(item => (
        <IllustrationImage key={item.name} {...item} />
      ))}

      <IllustrationTitle />
    </div>
  )
}

export default IllustrationDesktop;
