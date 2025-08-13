import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'efemerIA - Descubre tu efeméride',
  description: 'Descubre eventos históricos relacionados con tu fecha de nacimiento y nombre usando inteligencia artificial',
  keywords: 'efemérides, historia, IA, inteligencia artificial, eventos históricos',
  authors: [{ name: 'efemerIA' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
