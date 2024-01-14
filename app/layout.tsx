import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anurag Angal',
  description: 'Portfolio site of Anurag Angal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` h-screen w-full bg-[#121212]`}>
        {children}
      </body>
    </html>
  )
}
