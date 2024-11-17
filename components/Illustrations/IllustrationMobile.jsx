import { illustrations } from "@/constants";
import IllustrationImage from "./IllustrationImage";
import IllustrationTitle from "./IllustrationTitle";

const IllustrationMobile = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className='flex justify-between gap-2 max-h-[135px]'>
        {illustrations.slice(0, 2).map((item, index) => (
          <div key={item.name} className="h-auto max-h-[135px]">
            <IllustrationImage {...item} />
          </div>
        ))}
      </div>

      <IllustrationTitle />

      <div className='flex justify-between gap-2 max-h-[180px]'>
        {illustrations.slice(2, 4).map(item => (
          <div key={item.name} className="h-auto max-h-[180px]">
            <IllustrationImage {...item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default IllustrationMobile
