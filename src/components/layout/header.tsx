import Button from "../button"
import { FaceLogo } from "./face-logo"
import { Hamburger } from "./hamburger"
import { TextLogo } from "./text-logo"

export const Header = () => {
  return (
    <header className="border-b-masala-800 py-5.5 fixed flex w-full items-center justify-center border-b bg-white px-10">
      <div className="flex flex-1 items-center space-x-8">
        <Hamburger />
        <Button title="CV" />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <TextLogo />
      </div>

      <div className="flex flex-1 items-center justify-end">
        <FaceLogo />
      </div>
    </header>
  )
}