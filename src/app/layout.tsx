import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import { AppProviders } from '@/lib/app-providers'
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from '@/constants/constants'
import '@/app/globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL)
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('bg-background min-h-screen font-sans antialiased', fontSans.variable)}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
