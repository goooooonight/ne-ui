import type { PropType, ExtractPropTypes } from 'vue'

export const checkboxProps = {
  // v-model 绑定值
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>
  },
  // checkbox的值
  value: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>
  },
  // 选中时的值
  trueValue: {
    type: [String, Number] as PropType<string | number>
  },
  // 没有选中时的值
  falseValue: {
    type: [String, Number] as PropType<string | number>
  },
  // 文本标签
  label: {
    type: String
  }
}

export const checkboxEmits = {
  'update:modelValue': (value: string | number | boolean) =>
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
}

export type InputProps = ExtractPropTypes<typeof checkboxProps>
export type InputEmits = typeof checkboxEmits
