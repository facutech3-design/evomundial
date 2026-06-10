import type { Metadata } from 'next'
import { Atkinson_Hyperlegible } from 'next/font/google'
import { LectorGlobal } from '@/components/lector-global'
import './globals.css'

const atkinson = Atkinson_Hyperlegible({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'EvoMundial 2026 — Centro Dia Evolutiva, Mendoza',
  description:
    'Proyecto educativo e inclusivo sobre el Mundial 2026 para adolescentes y adultos jovenes con discapacidad en el Centro Dia Evolutiva de Mendoza, Argentina. Culturas, valores, arte, deporte adaptado y mucho mas.',
  keywords: ['mundial 2026', 'inclusion', 'discapacidad', 'centro dia', 'Evolutiva', 'Mendoza', 'educacion'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${atkinson.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <LectorGlobal />
      </body>
    </html>
  )
}
