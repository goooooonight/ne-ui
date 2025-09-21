import type { PropType, ExtractPropTypes } from 'vue'
import { uploadProps } from './upload'
import type { UploadFile } from './type'

export const uploadContentProps = {
  ...uploadProps,
  onStart: {
    type: Function as PropType<(file: UploadFile) => void>
  }
} as const

export const uploadContentEmits = {}

export type UploadContentProps = ExtractPropTypes<typeof uploadContentProps>
export type UploadContentEmits = typeof uploadContentEmits
