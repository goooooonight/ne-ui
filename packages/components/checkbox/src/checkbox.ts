import type { PropType, ExtractPropTypes } from 'vue'
import type { CheckboxValueType } from './type'

export const checkboxProps = {
  // v-model 绑定值
  modelValue: {
    type: [String, Number, Boolean] as PropType<CheckboxValueType>
  },
  // checkbox的值
  value: {
    type: [String, Number, Boolean] as PropType<CheckboxValueType>
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
  },
  // 禁用状态
  disabled: {
    type: Boolean,
    default: false
  },
  // 中间状态
  indeterminate: {
    type: Boolean,
    default: false
  }
}

export const checkboxEmits = {
  'update:modelValue': (value: CheckboxValueType) =>
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean',
  // change事件 - 绑定值发生变化时触发
  change: (value: CheckboxValueType) =>
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
}

export type ChekboxProps = ExtractPropTypes<typeof checkboxProps>
export type ChekboxEmits = typeof checkboxEmits
