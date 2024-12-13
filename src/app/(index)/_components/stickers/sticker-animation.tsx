import { useScrollTriggerAnimationSticker } from "@/hooks/useScrollTriggerAnimationSticker"
import { useRef } from "react"

type Props = {
  src: string
  className: string
  trigger: string
  start?: string
  end?: string
  scrub?: number
  animation: any
}

export const StickerAnimation: React.FC<Props> = ({
  src,
  className,
  trigger,
  start = "50% 50%",
  end = "bottom 50%",
  scrub = 1,
  animation,
}) => {
  const stickerRef = useRef(null)

  useScrollTriggerAnimationSticker({
    targetRef: stickerRef,
    trigger: trigger,
    start,
    end,
    scrub,
    animation,
  })

  return <img ref={stickerRef} src={src} alt="sticker" draggable={false} className={className} />
}
