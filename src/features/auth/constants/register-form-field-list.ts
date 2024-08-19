import type { DynamicFieldType } from '@/types/dynamic-field-type'
import { DynamicFieldEnum } from '@/types/dynamic-field-type'
import { LABEL_CONSTANTS } from '@/constants/label-constants'
import type { RegisterSchemaType } from '@/features/auth/schemas/register-schema'

export const REGISTER_FORM_FIELD_LIST: DynamicFieldType<RegisterSchemaType>[] = [
  {
    type: 'text',
    name: 'firstName',
    label: LABEL_CONSTANTS.FIRST_NAME,
    placeholder: 'John',
    fieldType: DynamicFieldEnum.Input
  },
  {
    type: 'text',
    name: 'lastName',
    label: LABEL_CONSTANTS.LAST_NAME,
    placeholder: 'Doe',
    fieldType: DynamicFieldEnum.Input
  },
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
  },
  {
    name: 'areAgreeWithTerms',
    fieldType: DynamicFieldEnum.Checkbox,
    label: LABEL_CONSTANTS.AGREE_WITH_TERMS
  }
]
