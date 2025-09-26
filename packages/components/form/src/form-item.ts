import type { ExtractPropTypes } from 'vue'

export const formItemProps = {
  /** @description 标签文本 */
  label: {
    type: String
  },
  /** @description 原生for属性 */
  for: {
    type: String
  }
} as const

export type FormItemProps = ExtractPropTypes<typeof formItemProps>
