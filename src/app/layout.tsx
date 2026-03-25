import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VanStralen - Restaurant in Rotterdam Kralingen',
  description: 'Een plek waar je welkom bent voor een stevige brunch, lunch of een gezellig diner met familie of vrienden!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
