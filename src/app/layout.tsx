import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elevate • Self-Improvement eBooks & Courses',
  description: 'Transform your life with our curated collection of self-improvement eBooks and digital courses.',
}

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Toaster />
              {children}
            </TooltipProvider>
          </QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
