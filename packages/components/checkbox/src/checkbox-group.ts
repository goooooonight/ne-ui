import type { PropType, ExtractPropTypes } from 'vue'

export const checkboxGroupProps = {
  // v-model 绑定值
  modelValue: {
    type: Array as PropType<string[] | number[]>,
    default: []
  },
  // 禁用状态
  disabled: {
    type: Boolean,
    default: false
  }
}

export const checkboxGroupEmits = {
  'update:modelValue': (value: string[] | number[]) => Array.isArray(value)
}

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type CheckboxGroupEmits = typeof checkboxGroupEmits
