import type { Metadata } from "next"
import { Ojuju } from "next/font/google"
import "./globals.css"
import { Layout } from "@/components/layout"
import localFont from "next/font/local"
import { Suspense } from "react"
import Loading from "./loading"

const ojuju = Ojuju({
  variable: "--font-ojuju",
  subsets: ["latin"],
})

const roobert = localFont({
  src: [
    {
      path: "../../public/fonts/roobert/RoobertLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/roobert/RoobertRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/roobert/RoobertMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/roobert/RoobertSemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/roobert/RoobertBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/roobert/RoobertHeavy.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-roobert",
})

export const metadata: Metadata = {
  title: "Le Minh quyen",
  description: "Designer portfolio",
  keywords: "",
  openGraph: {
    title: "Le Minh quyen",
    description: "Designer portfolio",
    images: {
      url: "/home/hero-footer.svg",
      width: "100%",
      height: "100%",
    },
  },
  twitter: {
    title: "Le Minh quyen",
    description: "Designer portfolio",
    images: {
      url: "/home/hero-footer.svg",
      width: "100%",
      height: "100%",
    },
  },
}

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
    <html lang="en" suppressHydrationWarning={false}>
      <head>
        <link rel={"stylesheet"} type={"text/css"} href={"/assets/font-awesome/all.min.css"} />
      </head>
      <body className={`${ojuju.variable} antialiased ${roobert.className} h-[2000px] overflow-x-hidden`}>
        <Suspense fallback={<Loading />}>
          <Layout>{children}</Layout>
        </Suspense>
      </body>
    </html>
  )
}
