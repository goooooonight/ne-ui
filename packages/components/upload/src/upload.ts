import type { PropType, ExtractPropTypes } from 'vue'
import type { UploadFile, UploadFiles } from './type'

let uidCounter = 1

/** @description uid生成函数 */
export function generateFileUid() {
  return Date.now() + uidCounter++
}

/** @description 默认空函数 */
export const NOOP = () => {}

export const uploadBaseProps = {
  /** @description 请求url */
  action: {
    type: String,
    required: true
  },
  /** @description 上传文件字段名 */
  name: {
    type: String,
    default: 'file'
  },
  /** @description 请求方法 */
  method: {
    type: String,
    default: 'POST'
  },
  /** @description 上传请求头部 */
  headers: {
    type: Object as PropType<Headers | Record<string, string>>
  },
  /** @description 上传请求参数 */
  data: {
    type: Object as PropType<Record<string, unknown>>
  },
  /** @description 上传文件列表 */
  filesList: {
    type: Array as PropType<UploadFiles>,
    default: []
  },
  /** @description 是否允许多选 */
  multiple: {
    type: Boolean,
    default: false
  },
  /** @description 是否拖拽上传 */
  drag: {
    type: Boolean,
    default: false
  },
  /** @description 限制文件上传数量 */
  limit: {
    type: Number
  }
} as const

export const uploadProps = {
  ...uploadBaseProps,
  /** @description 文件上传成功钩子 */
  onSuccess: {
    type: Function as PropType<
      (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void
    >,
    default: NOOP
  },
  /** @description 文件上传失败钩子 */
  onError: {
    type: Function as PropType<
      (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void
    >,
    default: NOOP
  },
  /** @description 文件删除钩子 */
  onRemove: {
    type: Function as PropType<
      (uploadFile: UploadFile, uploadFiles: UploadFiles) => void
    >,
    default: NOOP
  }
} as const

export type UploadProps = ExtractPropTypes<typeof uploadProps>
