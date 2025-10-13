import type { PropType, ExtractPropTypes } from 'vue'
import type { FormRules, Size } from './type'

export const formProps = {
  /** @description 表单绑定值 */
  model: {
    type: Object as PropType<Record<string, any>>
  },
  /** @description 表单校验规则 */
  rules: {
    type: Object as PropType<FormRules>
  },
  /** @description 是否禁用表单 */
  disabled: {
    type: Boolean,
    default: false
  },
  /** @description 表单内组件尺寸 */
  size: {
    type: String as PropType<Size>
  },
  /** @description 表单项标签宽度 */
  labelWidth: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  /** @description 表单项标签位置 */
  labelPosition: {
    type: String as PropType<'left' | 'right' | 'top'>,
    default: 'right'
  },
  /** @description 是否隐藏必填字段标签旁边的红色星号 */
  hideRequiredAsterisk: {
    type: Boolean,
    default: false
  },
  /** @description 是否显示校验错误信息 */
  showMessage: {
    type: Boolean,
    default: true
  },
  /** @description 是否为行内表单模式 */
  inline: {
    type: Boolean,
    default: false
  }
} as const

export type FormProps = ExtractPropTypes<typeof formProps>
