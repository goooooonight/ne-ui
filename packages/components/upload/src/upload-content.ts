import type { PropType, ExtractPropTypes, ComputedRef } from 'vue'
import { uploadProps } from './upload'
import type { UploadFile } from './type'

export const uploadContentProps = {
  ...uploadProps,
  // 当前已上传文件数量
  currentFileCount: {
    type: Object as PropType<ComputedRef<number>>,
    default: () => 0
  },
  onStart: {
    type: Function as PropType<(file: UploadFile) => void>
  }
} as const

export const uploadContentEmits = {}

export type UploadContentProps = ExtractPropTypes<typeof uploadContentProps>
export type UploadContentEmits = typeof uploadContentEmits
