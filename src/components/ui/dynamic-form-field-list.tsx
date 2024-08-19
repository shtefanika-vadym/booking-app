import type { DynamicFieldType } from '@/types/dynamic-field-type'
import DynamicFormField from '@/components/ui/dynamic-form-field'
import type { Control, FieldValues } from 'react-hook-form'

type Props<BaseSchemaType extends FieldValues> = {
  fields: DynamicFieldType<BaseSchemaType>[]
  control: Control<BaseSchemaType>
}

export default function DynamicFormFieldList<BaseSchemaType extends FieldValues>({
  fields,
  control
}: Props<BaseSchemaType>) {
  return (
    <>
      {fields.map((field: DynamicFieldType<BaseSchemaType>) => (
        <DynamicFormField key={field.name} {...field} control={control} />
      ))}
    </>
  )
}
