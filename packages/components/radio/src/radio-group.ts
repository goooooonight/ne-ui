import type { PropType, ExtractPropTypes } from 'vue'
import type { RadioValueType, Size } from './type'

export const radioGroupProps = {
  // v-model绑定值
  modelValue: {
    type: [String, Number, Boolean] as PropType<RadioValueType>,
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
  },
  // size尺寸
  size: {
    type: String as PropType<Size>,
    default: 'default'
  }
}

export const radioGroupEmits = {
  'update:modelValue': (value: string | number | boolean | undefined) =>
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean',
  // change事件 - 绑定值发生变化时触发
  change: (value: string | number | boolean | undefined) =>
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
}

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
export type RadioEmits = typeof radioGroupEmits
