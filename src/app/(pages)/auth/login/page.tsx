'use client'

import Link from 'next/link'
import { CardWrapper } from '@/components/ui/card-wrapper'
import { AUTH_CONSTANTS } from '@/features/auth/constants/auth-constants'
import AuthWrapper from '@/features/auth/components/auth-wrapper'
import LoginForm from '@/features/auth/components/login-form'
import LoginIllustratrion from '@/features/auth/assets/login-illustration.svg'
import Illustration from '@/features/auth/components/illustration'

export default function LoginPage() {
  return (
    <AuthWrapper>
      <Illustration
        illustration={LoginIllustratrion}
        title={AUTH_CONSTANTS.WELCOME_BACK}
        description={AUTH_CONSTANTS.LOGIN_DESCRIPTION}
      />

      <CardWrapper className="align- m-10 flex h-[calc(100vh_-_80px)] w-2/4 items-center">
        <div className="m-auto w-5/12">
          <LoginForm />
          <p className="text-sm">
            {AUTH_CONSTANTS.DONT_HAVE_AN_ACCOUNT}
            <Link href="/auth/register" className="text-[#2f7fec]">
              {AUTH_CONSTANTS.REGISTER}
            </Link>
          </p>
        </div>
      </CardWrapper>
    </AuthWrapper>
  )
}
