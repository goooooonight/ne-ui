import type { PropType, ExtractPropTypes } from 'vue'

export const formProps = {
  /** @description 表单绑定值 */
  model: {
    type: Object as PropType<Record<string, any>>
  }
} as const

export type FormProps = ExtractPropTypes<typeof formProps>
