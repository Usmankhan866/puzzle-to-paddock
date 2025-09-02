import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Puzzle to Paddock - Au Pair & Nannies Agency | NDIS Support Services",
  description:
    "Connecting families with trusted au pairs, nannies, and NDIS support services. Professional childcare and disability support across Australia.",
  generator: "v0.app",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
  themeColor: "#064232",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Puzzle to Paddock",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Nunito+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="safe-area-padding">{children}</body>
    </html>
  )
}
