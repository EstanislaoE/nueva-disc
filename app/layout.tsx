import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ToasterProvider } from '@/components/toaster-provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trip Advisor Ai',
  description: 'Trip Advisor Ai recommends travel destinations based on artificial intelligence | Discover places to travel with artificial intelligence | Find local deals [Official Site]',
  keywords: 'tripadvisorai.com, travel guide, vacation destinations, travel news, best places to visit, first time visitors, one day trip',
  robots: 'all, index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
