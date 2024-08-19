import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
  className?: string
}

export const CardWrapper = ({ children, className }: Props) => {
  return (
    <div className={cn('flex flex-col justify-center rounded-xl bg-white p-8', className)}>
      {children}
    </div>
  )
}
