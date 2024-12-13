import { useGSAP, Draggable, gsap } from "@/libs/gsap"
import { useRef } from "react"

export const StickerSmile = () => {
  const stickerRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    if (!stickerRef.current) return

    Draggable.create(stickerRef.current, {
      type: "rotation",
      inertia: true,
    })

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
      rotateZ: 360,
    })
  }, [])

  return (
    <img
      src="/sticker/stk-smile.svg"
      alt="StickerSmile"
      draggable={false}
      ref={stickerRef}
      className="sticker absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
    />
  )
}
