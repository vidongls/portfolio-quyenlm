import { gsap, useGSAP } from "@/libs/gsap"
import { useRef } from "react"

export const StickerTextRight = () => {
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
      x: 300,
      opacity: 0,
    })
  }, [])

  return (
    <p ref={stickerRef} className="text-introduction sticker absolute right-[12%] top-1/2 -translate-y-1/2 transform">
      You smile
    </p>
  )

  // <img src="/sticker/stk-text-2.svg" alt="StickerTextRight" draggable={false} className="absolute right-0 top-[360px]" />
}
