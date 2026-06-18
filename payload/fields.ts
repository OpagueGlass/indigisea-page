import type {
  ArrayField,
  FieldBase,
  NumberField,
  TextareaField,
  TextField,
  Field,
} from "payload"

/**
 * Small helpers to keep the Global definitions concise. Every field that holds
 * editable copy is localized so editors can manage English and Bahasa Melayu
 * side by side in the Payload admin.
 */

const defaultLabel = (name: string, label?: string): FieldBase => ({
  name,
  localized: true,
  label: label ? label : false,
})

export const text = (name: string, label?: string): TextField => ({
  type: "text",
  ...defaultLabel(name, label),
})

export const textarea = (name: string, label?: string): TextareaField => ({
  type: "textarea",
  ...defaultLabel(name, label),
})

export const number = (name: string, label?: string): NumberField => ({
  type: "number",
  ...defaultLabel(name, label),
})

export const stringList = (name: string, label?: string): TextField => ({
  type: "text",
  hasMany: true,
  ...defaultLabel(name, label),
})

export const array = (
  name: string,
  fields: Field[],
  label?: string
): ArrayField => ({
  type: "array",
  fields,
  ...defaultLabel(name, label),
})
