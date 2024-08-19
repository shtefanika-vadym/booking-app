import type { AxiosResponse } from 'axios'
import axiosInstance from '@/lib/axios/axios'
import type { MutationFunction } from '@tanstack/react-query'
import { AUTH_API_ENDPOINT } from '@/features/auth/config/auth-api-endpoint'
import type { ResetPasswordSchemaType } from '@/features/auth/schemas/reset-password-schema'
import type { ApiResponseMessageType } from '@/types/api-response-message-type'
import type { RegisterSchemaType } from '@/features/auth/schemas/register-schema'

const resetPassword: MutationFunction<ApiResponseMessageType, ResetPasswordSchemaType> = async (
  payload: ResetPasswordSchemaType
): Promise<ApiResponseMessageType> => {
  const { data }: AxiosResponse<ApiResponseMessageType> = await axiosInstance.post(
    AUTH_API_ENDPOINT.RESET_PASSWORD,
    payload
  )
  return data
}

const register: MutationFunction<ApiResponseMessageType, RegisterSchemaType> = async (
  payload: RegisterSchemaType
): Promise<ApiResponseMessageType> => {
  const { data }: AxiosResponse<ApiResponseMessageType> = await axiosInstance.post(
    AUTH_API_ENDPOINT.REGISTER,
    payload
  )
  return data
}

export const AuthApi = { resetPassword, register }
