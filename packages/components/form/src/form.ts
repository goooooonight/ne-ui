import type { PropType, ExtractPropTypes } from 'vue'
import type { FormRules } from './type'

export const formProps = {
  /** @description 表单绑定值 */
  model: {
    type: Object as PropType<Record<string, any>>
  },
  /** @description 表单校验规则 */
  rules: {
    type: Object as PropType<FormRules>
  }
} as const

export type FormProps = ExtractPropTypes<typeof formProps>
