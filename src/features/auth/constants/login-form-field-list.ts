import type { DynamicFieldType } from '@/types/dynamic-field-type'
import { DynamicFieldEnum } from '@/types/dynamic-field-type'
import { LABEL_CONSTANTS } from '@/constants/label-constants'
import type { LoginSchemaType } from '@/features/auth/schemas/login-schema'

export const LOGIN_FORM_FIELD_LIST: DynamicFieldType<LoginSchemaType>[] = [
  {
    name: 'email',
    type: 'email',
    label: LABEL_CONSTANTS.EMAIL,
    placeholder: 'yourmail@mail.com',
    fieldType: DynamicFieldEnum.Input
  },
  {
    name: 'password',
    type: 'password',
    placeholder: '+6 character',
    label: LABEL_CONSTANTS.PASSWORD,
    fieldType: DynamicFieldEnum.Input
  }
]
