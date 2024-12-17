import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="flex flex-col space-y-10 bg-paris-daisy-300 p-10">
      <h3 className="font-ojuju text-[70px] font-bold leading-[86px] text-masala-800">Help a UX UI Designer’s!</h3>
      <div className="flex items-start justify-between space-x-[200px] px-[28px]">
        <img src="/home/hero-footer.svg" alt="Quyen Le Minh" />
        <div className="flex h-[232px] flex-col justify-between">
          <h5 className="font-roobert text-2xl font-bold leading-10 text-masala-800">
            Turns out, all this time I’ve only been doing UI design, haha.
            <br /> Help me achieve my goal of becoming a product designer!
          </h5>
          <div className="mt-auto flex items-center justify-between">
            <Link href={"mailto:leminhquyen10122000@gmail.com"}>leminhquyen10122000@gmail.com</Link>
            <Link href={"tel:+84981268736"}>(+84) 981 268 736</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
