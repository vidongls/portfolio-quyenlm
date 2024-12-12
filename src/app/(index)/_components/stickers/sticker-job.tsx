import { gsap, useGSAP } from "@/libs/gsap"
import { useRef } from "react"

export const StickerJob = () => {
  const stickerRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    if (!stickerRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: "#section-introduction",
        start: "top 50px",
        endTrigger: "#section-introduction",
        end: "top 600px",
      },
    })

    tl.to(stickerRef.current, {
      opacity: 0,
      y: -30,
    })
  }, [])

  return (
    <img
      ref={stickerRef}
      src="/sticker/stk-3.png"
      alt="StickerJob"
      draggable={false}
      className="absolute left-1/2 top-6 -translate-x-1/2 transform"
    />
  )
}
