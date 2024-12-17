"use client"

import { ScrollTrigger, useGSAP, gsap } from "@/libs/gsap"
import { ExperienceItem } from "./experience-item"
import { experiences } from "@/utils/experiences"

export const ExperienceTimelineSection = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".container-content",
      start: "top 160px",
      end: "bottom 500px",
      pin: ".content-left",
      pinSpacing: true,
    })
  }, [])

  return (
    <section className="container my-40 px-10" id="section-experience-timeline">
      <div className="container-content grid grid-cols-7 space-x-10">
        <div className="content-left col-span-2 h-96">
          <p className="h-screen font-ojuju text-[64px] font-bold leading-[90px] text-masala-800">Works Experience Timeline</p>
        </div>
        <ul className="content-right col-span-5">
          {experiences.map(({ year, title, description, tagClass }) => (
            <ExperienceItem key={title} tagClass={tagClass} year={year} title={title} description={description} />
          ))}
        </ul>
      </div>
    </section>
  )
}
