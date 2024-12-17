import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="flex flex-col space-y-10 bg-paris-daisy-300 p-10">
      <h3 className="font-ojuju text-[70px] font-bold leading-[86px] text-masala-800">Help a UX UI Designer’s!</h3>
      <div className="flex items-start justify-between space-x-[200px] px-[28px]">
        <img src="/home/hero-footer.svg" alt="Quyen Le Minh" />
        <div className="flex h-[232px] flex-col justify-between">
          <p className="font-roobert text-2xl font-bold leading-10 text-masala-800">
            Turns out, all this time I’ve only been doing UI design, haha.
            <br /> Help me achieve my goal of becoming a product designer!
          </p>
          <div className="mt-auto flex items-center justify-between text-2xl leading-9 text-masala-800">
            <Link href={"mailto:leminhquyen10122000@gmail.com"} className="hover:underline">
              leminhquyen10122000@gmail.com
            </Link>
            <Link href={"tel:+84981268736"} className="hover:underline">
              (+84) 981 268 736
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-10 py-6">
        <p className="text-base leading-6 text-masala-800">© Minh Quyen Le 2025</p>{" "}
        <ul className="flex items-center space-x-6">
          <li>
            <Link href={"/"} className="transition-all duration-150 ease-linear hover:opacity-80">
              <img src="/home/linkedin.svg" alt="linkedin" />
            </Link>
          </li>
          <li>
            <Link href={"/"} className="transition-all duration-150 ease-linear hover:opacity-80">
              <img src="/home/facebook.svg" alt="facebook" />
            </Link>
          </li>
          <li>
            <Link href={"/"} className="transition-all duration-150 ease-linear hover:opacity-80">
              <img src="/home/behance.svg" alt="behance" />
            </Link>
          </li>
          <li>
            <Link href={"/"} className="transition-all duration-150 ease-linear hover:opacity-80">
              <img src="/home/dribble.svg" alt="dribble" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
