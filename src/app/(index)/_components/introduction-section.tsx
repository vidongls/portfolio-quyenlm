"use client"

import { stickers } from "@/utils/animations"
import { StickerAnimation } from "./stickers/sticker-animation"
import { StickerSmile, StickerTextLeft, StickerTextRight } from "./stickers"

export const IntroductionSection = () => {
  return (
    <section className="h-[800px] px-9 py-4" id="section-introduction">
      <div className="relative h-full overflow-hidden">
        <div className="bottom-[100px] bottom-[10px] bottom-[150px] bottom-[200px] bottom-[20px] bottom-[60px] bottom-[80px] left-[200px] left-[230px] left-[250px] left-[30%] left-[30px] left-[340px] left-[390px] left-[43%] left-[5%] left-[60%] left-[65%] right-[120px] right-[20%] right-[200px] right-[220px] right-[30%] right-[30px] right-[36%] right-[360px] top-[100px] top-[10px] top-[140px] top-[180px] top-[182px] top-[230px] top-[260px] top-[290px] hidden"></div>
        {stickers.map((item, index) => (
          <StickerAnimation
            key={index}
            animation={item.animation}
            src={item.src}
            className={item.className}
            trigger={item.trigger}
            start={item?.start}
            end={item?.end}
          />
        ))}
        <StickerTextLeft />
        <StickerSmile />
        <StickerTextRight />
      </div>
    </section>
  )
}
