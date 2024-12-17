"use client"

import { stickers } from "@/utils/animations"
import { StickerAnimation } from "./stickers/sticker-animation"
import { StickerSmile, StickerTextLeft, StickerTextRight } from "./stickers"

export const IntroductionSection = () => {
  return (
    <section className="h-[800px] px-9 py-4" id="section-introduction">
      <div className="relative h-full">
        <div className="bg-mona-lisa-300 bg-de-york-300 bg-illusion-300 bg-malibu-300 absolute bottom-0 bottom-[100px] bottom-[10px] bottom-[150px] bottom-[200px] bottom-[20px] bottom-[60px] bottom-[80px] left-1/2 left-[200px] left-[230px] left-[250px] left-[30%] left-[30px] left-[340px] left-[390px] left-[43%] left-[5%] left-[60%] left-[65%] right-0 right-[120px] right-[20%] right-[200px] right-[220px] right-[30%] right-[30px] right-[36%] right-[360px] top-0 top-1/2 top-6 top-[100px] top-[10px] top-[140px] top-[180px] top-[182px] top-[230px] top-[260px] top-[290px] hidden -translate-x-1/2 transform bg-paris-daisy-300"></div>
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
