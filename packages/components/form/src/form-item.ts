import type { ExtractPropTypes, PropType } from 'vue'
import type { FormItemRules } from './type'

export const formItemProps = {
  /** @description model 键名 */
  prop: {
    type: String
  },
  /** @description 标签文本 */
  label: {
    type: String
  },
  /** @description 表单校验规则 */
  rules: {
    type: Object as PropType<FormItemRules>
  },
  /** @description 原生for属性 */
  for: {
    type: String
  }
} as const

export type FormItemProps = ExtractPropTypes<typeof formItemProps>
