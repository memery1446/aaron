import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Digital Computer Academy Harda | Computer Training Institute",
  description:
    "Digital Computer Academy Harda offers comprehensive computer training programs including DCA, PGDCA, and specialized courses in cybersecurity, data science, and programming.",
  keywords:
    "computer academy, computer training, DCA, PGDCA, Harda computer institute, digital computer academy, IT courses, computer education",
  authors: [{ name: "Pankaj Rathore" }],
  creator: "Digital Computer Academy",
  publisher: "Digital Computer Academy",
  openGraph: {
    title: "Digital Computer Academy Harda | Computer Training Institute",
    description: "Leading computer training institute in Harda offering professional IT courses and certifications.",
    url: "https://digitalcomputeracademy.vercel.app",
    siteName: "Digital Computer Academy Harda",
    images: [
      {
        url: "https://thumbs.dreamstime.com/b/digital-computer-technology-network-business-system-futuristic-tech-background-concept-digital-computer-technology-network-315124112.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Computer Academy Harda",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token", // Replace with your Google Search Console verification token
  },
  alternates: {
    canonical: "https://digitalcomputeracademy.vercel.app",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'