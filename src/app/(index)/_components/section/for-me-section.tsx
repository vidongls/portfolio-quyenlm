import Button from "@/components/button"
import Link from "next/link"

export const ForMeSection = () => {
  return (
    <section className="container my-40 px-10" id="section-for-me">
      <h1 className="fixed left-[-9999px]">LE MINH QUYEN</h1>
      <h2 className="mb-10 text-center font-ojuju text-7xl font-bold">Who Am I?</h2>
      <div className="grid grid-cols-2">
        <div>
          <img src="/home/bg-hero-section.png" alt="hero" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-10 bg-paris-daisy-300 px-10">
          <p className="text-center font-roobert text-2xl font-bold leading-10 text-masala-800">
            As a UX designer, I’m refining my craft to create meaningful experiences, but for now, I’m navigating the tough path
            of job hunting and perfecting my portfolio, hoping for the right opportunity.
          </p>
          <Link href="/journey">
            <Button
              title="My painful journey"
              icon={
                <i className="fa-light fa-arrow-right-long ml-1 transition-transform ease-in-out group-hover:translate-x-1"></i>
              }
              className="group"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
