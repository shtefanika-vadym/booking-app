import Link from 'next/link'
import Image from 'next/image'
import { AUTH_CONSTANTS } from '@/features/auth/constants/auth-constants'
import { CardWrapper } from '@/components/ui/card-wrapper'
import AuthWrapper from '@/features/auth/components/auth-wrapper'
import ResetPasswordForm from '@/features/auth/components/reset-password-form'
import ResetPasswordIlustration from '@/features/auth/assets/reset-password-illustration.svg'

export default function ResetPasswordPage() {
  return (
    <AuthWrapper>
      <CardWrapper>
        <Image priority src={ResetPasswordIlustration} alt="Reset Password Ilustration" />
        <h1 className="mb-10 mt-3 text-center text-3xl font-bold">
          {AUTH_CONSTANTS.RESET_PASSWORD}
        </h1>
        <ResetPasswordForm />
        <p className="text-sm">
          {AUTH_CONSTANTS.GO_BACK_TO}
          <Link href="/auth/login" className="text-[#2f7fec]">
            {AUTH_CONSTANTS.LOGIN}
          </Link>
        </p>
      </CardWrapper>
    </AuthWrapper>
  )
}
