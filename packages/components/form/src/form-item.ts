import type { ExtractPropTypes, PropType } from 'vue'
import type { FormItemRules, Size } from './type'

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
  },
  /** @description 是否为必填项 */
  required: {
    type: Boolean
  },
  /** @description 表单项内组件尺寸 */
  size: {
    type: String as PropType<Size>
  },
  /** @description 是否显示校验错误信息 */
  showMessage: {
    type: Boolean,
    default: true
  }
} as const

export type FormItemProps = ExtractPropTypes<typeof formItemProps>
