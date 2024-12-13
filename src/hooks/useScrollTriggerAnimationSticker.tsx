import { gsap, ScrollTrigger, useGSAP } from "@/libs/gsap"

type AnimationConfig = {
  targetRef: React.RefObject<any> // Tham chiếu tới phần tử cần hoạt ảnh
  trigger: string // Phần tử kích hoạt ScrollTrigger
  start?: string // Điểm bắt đầu (mặc định là "top 80%")
  end?: string // Điểm kết thúc (mặc định là "bottom 20%")
  scrub?: boolean | number // Đồng bộ hóa hoạt ảnh với cuộn
  animation: gsap.TweenVars // Cấu hình hoạt ảnh
}

export const useScrollTriggerAnimationSticker = ({
  targetRef,
  trigger,
  start = "top 80%",
  end = "bottom 20%",
  scrub = true,
  animation,
}: AnimationConfig) => {
  useGSAP(() => {
    if (!targetRef.current) return

    // Tạo timeline GSAP với ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger, // Phần tử kích hoạt
        start, // Điểm bắt đầu
        end, // Điểm kết thúc
        scrub, // Đồng bộ hóa với cuộn
      },
    })

    // Áp dụng hoạt ảnh cho phần tử
    tl.to(targetRef.current, animation)

    // Cleanup khi component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [targetRef, trigger, start, end, scrub, animation]) // Các dependency cho useEffect
}
