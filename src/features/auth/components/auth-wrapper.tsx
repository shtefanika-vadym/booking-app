import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function AuthWrapper({ children }: Props) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">{children}</main>
  )
}
