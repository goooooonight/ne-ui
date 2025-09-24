import type { PropType, ExtractPropTypes, ComputedRef } from 'vue'
import { NOOP, uploadProps } from './upload'
import type { UploadFile } from './type'

export const uploadContentProps = {
  ...uploadProps,
  // 当前已上传文件数量
  currentFileCount: {
    type: Object as PropType<ComputedRef<number>>,
    default: () => 0
  },
  /** @description 文件上传开始钩子 */
  onStart: {
    type: Function as PropType<(uploadFile: UploadFile) => void>,
    default: NOOP
  },
  /** @description 文件上传成功钩子 */
  onSuccess: {
    type: Function as PropType<(response: any, uploadFile: UploadFile) => void>,
    default: NOOP
  },
  /** @description 文件上传失败钩子 */
  onError: {
    type: Function as PropType<(error: Error, uploadFile: UploadFile) => void>,
    default: NOOP
  }
} as const

export const uploadContentEmits = {}

export type UploadContentProps = ExtractPropTypes<typeof uploadContentProps>
export type UploadContentEmits = typeof uploadContentEmits
