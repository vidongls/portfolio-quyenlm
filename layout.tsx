import "./globals.css"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { AntdRegistry } from "@ant-design/nextjs-registry"
import { PreloadResources } from "@/app/preload-resources"
import { AppProvider } from "@/provider/AppProvider"

export const metadata: Metadata = {
  title: "Zuma - Home Page",
  description: "Zuma Home Page 123",
}

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <PreloadResources />
        <link rel={"stylesheet"} type={"text/css"} href={"/assets/font-awesome/all.css"} />
      </head>
      <body className={`${roboto.variable}`}>
        <AntdRegistry>
          <AppProvider>{children}</AppProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
