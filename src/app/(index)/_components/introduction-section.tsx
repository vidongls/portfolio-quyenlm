"use client"

import { stickers } from "@/utils/animations"
import { StickerAnimation } from "./stickers/sticker-animation"
import { StickerSmile, StickerTextLeft, StickerTextRight } from "./stickers"

export const IntroductionSection = () => {
  return (
    <section className="h-[800px] px-9 py-4" id="section-introduction">
      <div className="relative h-full overflow-hidden">
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
