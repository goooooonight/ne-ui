import type { PropType, ExtractPropTypes } from 'vue'
import type { UploadFiles } from './type'

export const uploadProps = {
  // 上传文件列表
  filesList: {
    type: Array as PropType<UploadFiles>,
    default: []
  },
  // 是否允许多选
  multiple: {
    type: Boolean,
    default: false
  }
} as const

export const uploadEmits = {}

export type UploadProps = ExtractPropTypes<typeof uploadProps>
export type UploadEmits = typeof uploadEmits
