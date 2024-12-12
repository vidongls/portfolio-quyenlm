import { gsap, useGSAP } from "@/libs/gsap"
import { useRef } from "react"

export const StickerHeart = () => {
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
      rotateZ: 300,
      x: -80,
      y: -400,
    })
  }, [])
  return (
    <img ref={stickerRef} src="/sticker/stk-2.svg" alt="StickerHeart" draggable={false} className="absolute left-[230px] top-0" />
  )
}
