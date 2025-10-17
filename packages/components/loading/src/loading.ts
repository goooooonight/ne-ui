import type { ExtractPropTypes } from 'vue'

export const loadingProps = {
  /** @description 是否显示加载动画 */
  visible: {
    type: Boolean,
    default: true
  },
  /** @description 加载文本 */
  text: {
    type: String
  },
  /** @description 遮罩背景色 */
  background: {
    type: String
  },
  /** @description 延迟显示加载的时间 */
  delay: {
    type: Number
  }
} as const

export type LoadingProps = ExtractPropTypes<typeof loadingProps>
