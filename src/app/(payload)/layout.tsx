import React from 'react'
import './custom.css'

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
