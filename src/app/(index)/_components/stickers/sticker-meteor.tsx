"use client"

import { gsap, useGSAP } from "@/libs/gsap"
import { useRef } from "react"

export const StickerMeteor = () => {
  const stickerRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    if (!stickerRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: "#section-introduction",
        start: "50% 50%",
        endTrigger: "#section-introduction",
        end: "bottom 50%",
      },
    })

    tl.to(stickerRef.current, {
      rotateZ: 200,
      x: -60,
      y: -300,
    })
  }, [])

  return (
    <img ref={stickerRef} src="/sticker/stk-1.svg" alt="StickerMeteor" draggable={false} className="absolute left-[30px] top-0" />
  )
}
