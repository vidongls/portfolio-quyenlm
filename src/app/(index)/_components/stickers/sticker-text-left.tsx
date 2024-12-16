import { gsap, useGSAP } from "@/libs/gsap"
import { useRef } from "react"

export const StickerTextLeft = () => {
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
      x: -300,
      opacity: 0,
    })
  }, [])

  return (
    <p ref={stickerRef} className="text-introduction sticker absolute left-[16%] top-1/2 -translate-y-1/2 transform">
      I design
    </p>
  )
}
{
  /* <img src="/sticker/stk-text-1.svg" alt="StickerTextLeft" draggable={false} className="absolute left-[30px] top-[360px]" /> */
}
