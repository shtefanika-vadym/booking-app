'use client'

import type { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from '@/components/ui/toaster'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>
      <Toaster />
    </SessionProvider>
  )
}
