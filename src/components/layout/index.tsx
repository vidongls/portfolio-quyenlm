import { Content } from "./content"
import { Footer } from "./footer"
import { Header } from "./header"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
