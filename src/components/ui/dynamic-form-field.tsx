import type { Control, FieldValues, Path } from 'react-hook-form'
import type { DynamicFieldType } from '@/types/dynamic-field-type'
import { DynamicFieldEnum } from '@/types/dynamic-field-type'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useMemo } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import type { ControllerRenderProps } from 'react-hook-form/dist/types/controller'
import { Checkbox } from '@/components/ui/checkbox'

type Props<BaseSchemaType extends FieldValues> = {
  name: Path<BaseSchemaType>
  control: Control<BaseSchemaType>
} & DynamicFieldType<BaseSchemaType>

type FieldComponentProps = {
  type?: string
  placeholder?: string
  field: ControllerRenderProps<FieldValues, string>
}

const fieldComponents: Record<DynamicFieldEnum, (props: FieldComponentProps) => JSX.Element> = {
  [DynamicFieldEnum.Input]: ({ field, placeholder, type }) => (
    <Input type={type} placeholder={placeholder} {...field} />
  ),
  [DynamicFieldEnum.Checkbox]: ({ field }) => (
    <Checkbox checked={field.value} onCheckedChange={field.onChange} className="m-4" />
  )
}

export default function DynamicFormField<BaseSchemaType extends FieldValues>({
  name,
  label,
  placeholder,
  type = 'text',
  fieldType = DynamicFieldEnum.Input,
  control
}: Props<BaseSchemaType>) {
  const FieldComponent = useMemo(() => {
    return fieldComponents[fieldType]
  }, [fieldType])

  if (!FieldComponent) return null

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className="mt-4">
          <FormLabel className="text-xs">{label}</FormLabel>
          <FormControl>
            <FieldComponent field={field} placeholder={placeholder} type={type} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
