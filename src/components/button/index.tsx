"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@/libs/gsap"
import { cn } from "@/utils"

type Props = {
  title: string
  icon?: React.ReactNode
  className?: string
}

const Button: React.FC<Props> = ({ title, icon, className }) => {
  const buttonRef = useRef(null)
  const flairRef = useRef(null)

  useGSAP(() => {
    const button: any = buttonRef.current
    const flair = flairRef.current

    if (!button || !flair) return

    const xSet = gsap.quickSetter(flair, "xPercent")
    const ySet = gsap.quickSetter(flair, "yPercent")

    const getXY = (e: any) => {
      const { left, top, width, height } = button.getBoundingClientRect()
      const xTransformer = gsap.utils.pipe(gsap.utils.mapRange(0, width, 0, 100), gsap.utils.clamp(0, 100))
      const yTransformer = gsap.utils.pipe(gsap.utils.mapRange(0, height, 0, 100), gsap.utils.clamp(0, 100))

      return {
        x: xTransformer(e.clientX - left),
        y: yTransformer(e.clientY - top),
      }
    }

    const handleMouseEnter = (e: any) => {
      const { x, y } = getXY(e)

      xSet(x)
      ySet(y)

      gsap.to(flair, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      })
    }

    const handleMouseLeave = (e: any) => {
      const { x, y } = getXY(e)

      gsap.killTweensOf(flair)

      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseMove = (e: any) => {
      const { x, y } = getXY(e)

      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.4,
        ease: "power2",
      })
    }

    button.addEventListener("mouseenter", handleMouseEnter)
    button.addEventListener("mouseleave", handleMouseLeave)
    button.addEventListener("mousemove", handleMouseMove)

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter)
      button.removeEventListener("mouseleave", handleMouseLeave)
      button.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={buttonRef} data-block="button" className={cn("button button--stroke", className)}>
      <div ref={flairRef} className="button__flair" />
      <span>
        {title} {icon}
      </span>
    </div>
  )
}

export default Button
