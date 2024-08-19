import type { DynamicFieldType } from '@/types/dynamic-field-type'
import { DynamicFieldEnum } from '@/types/dynamic-field-type'
import { LABEL_CONSTANTS } from '@/constants/label-constants'
import type { ResetPasswordSchemaType } from '@/features/auth/schemas/reset-password-schema'

export const RESET_PASSWORD_FORM_FIELD_LIST: DynamicFieldType<ResetPasswordSchemaType>[] = [
  {
    name: 'email',
    type: 'email',
    label: LABEL_CONSTANTS.EMAIL,
    placeholder: 'yourmail@mail.com',
    fieldType: DynamicFieldEnum.Input
  }
]
