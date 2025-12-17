import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SIAMIK 2025 - UPN Veteran Jawa Timur",
  description: "Sistem Informasi Akademik UPN Veteran Jawa Timur",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
   <html lang="id" className="dark">
  <body className="font-sans antialiased flex min-h-screen flex-col">

    {/* Konten utama */}
    <main className="flex-1">
      {children}
    </main>

    {/* Footer */}
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-zinc-400">
         {new Date().getFullYear()}  
        <span className="mx-1">•</span>
        Dibuat untuk memenuhi tugas UAS matakuliah IMK. Referensi Web : MyITS Portal
      </div>
    </footer>

    <Analytics />
  </body>
</html>
  )
}
