import type { PropType, ExtractPropTypes } from 'vue'

export const radioGroupProps = {
  // v-model绑定值
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: undefined
  },
  // 禁用状态
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  // 原生name属性
  name: {
    type: String
  }
}

export const radioGroupEmits = {
  'update:modelValue': (value: string | number | boolean | undefined) =>
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
}

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
export type RadioEmits = typeof radioGroupEmits
