import type { PropType, ExtractPropTypes } from 'vue'
import type { UploadFiles } from './type'

export const uploadProps = {
  // 请求url
  action: {
    type: String,
    required: true
  },
  // 上传文件字段名
  name: {
    type: String,
    default: 'file'
  },
  // 请求方法
  method: {
    type: String,
    default: 'POST'
  },
  // 上传请求头部
  headers: {
    type: Object as PropType<Headers | Record<string, string>>
  },
  // 上传请求参数
  data: {
    type: Object as PropType<Record<string, unknown>>
  },
  // 上传文件列表
  filesList: {
    type: Array as PropType<UploadFiles>,
    default: []
  },
  // 是否允许多选
  multiple: {
    type: Boolean,
    default: false
  },
  // 文件上传成功钩子
  onSuccess: {
    type: Function as PropType<(response: any) => void>,
    default: () => {}
  },
  // 文件上传失败钩子
  onError: {
    type: Function as PropType<(error: any) => void>,
    default: () => {}
  }
} as const

export const uploadEmits = {}

export type UploadProps = ExtractPropTypes<typeof uploadProps>
export type UploadEmits = typeof uploadEmits
