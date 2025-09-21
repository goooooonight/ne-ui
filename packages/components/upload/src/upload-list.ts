import type { PropType, ExtractPropTypes } from 'vue'
import type { UploadFiles } from './type'

export const uploadListProps = {
  files: {
    type: Array as PropType<UploadFiles>,
    default: []
  }
} as const

export const uploadListEmits = {}

export type UploadListProps = ExtractPropTypes<typeof uploadListProps>
export type UploadListEmits = typeof uploadListEmits
