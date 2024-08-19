import { CardWrapper } from '@/components/ui/card-wrapper'
import { AUTH_CONSTANTS } from '@/features/auth/constants/auth-constants'
import Link from 'next/link'
import AuthWrapper from '@/features/auth/components/auth-wrapper'
import RegisterForm from '@/features/auth/components/register-form'
import Illustration from '@/features/auth/components/illustration'
import RegisterIllustratrion from '@/features/auth/assets/register-illustration.svg'

export default function RegisterPage() {
  return (
    <AuthWrapper>
      <Illustration
        illustration={RegisterIllustratrion}
        title={AUTH_CONSTANTS.GROW_YOUR_BUSINESS}
        description={AUTH_CONSTANTS.REGISTER_DESCRIPTION}
      />

      <CardWrapper className="align- m-10 flex h-[calc(100vh_-_80px)] w-2/4 items-center">
        <div className="m-auto w-5/12">
          <RegisterForm />
          <p className="text-sm">
            {AUTH_CONSTANTS.HAVE_AN_ACCOUNT}
            <Link href="/auth/login" className="text-[#2f7fec]">
              {AUTH_CONSTANTS.LOGIN}
            </Link>
          </p>
        </div>
      </CardWrapper>
    </AuthWrapper>
  )
}
