import { cn } from "@/utils"

type Props = {
  year: number
  tagClass: string
  title: string
  description: string
}

export const ExperienceItem: React.FC<Props> = ({ tagClass, year, title, description }) => {
  return (
    <li className="mb-10 flex items-start space-x-10 border-b border-masala-800 pb-10 last-of-type:mb-0 last-of-type:border-0">
      <div
        className={cn(
          "w-fit rounded-full border-2 border-masala-800 px-10 py-2 text-center font-roobert text-[40px] font-semibold leading-[48px] text-masala-800",
          tagClass
        )}
      >
        {year}
      </div>
      <div className="">
        <h4 className="mb-2 font-roobert text-[40px] font-bold leading-[48px] text-masala-800">{title}</h4>
        <p className="font-roobert text-2xl leading-9 text-masala-800">{description}</p>
      </div>
    </li>
  )
}
