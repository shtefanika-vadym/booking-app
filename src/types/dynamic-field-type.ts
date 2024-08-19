import type { Path } from 'react-hook-form'

export type DynamicFieldType<T> = {
  name: Path<T>
  label: string
  type?: string
  placeholder?: string
  fieldType: DynamicFieldEnum
}

export enum DynamicFieldEnum {
  Input = 'input',
  Checkbox = 'checkbox'
}
