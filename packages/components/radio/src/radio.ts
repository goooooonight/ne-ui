import type { PropType, ExtractPropTypes } from 'vue'
import type { RadioValueType, Size } from './type'

export const radioProps = {
  // v-model绑定的值
  modelValue: {
    type: [String, Number, Boolean] as PropType<RadioValueType>
  },
  // radio的值
  value: {
    type: [String, Number, Boolean] as PropType<RadioValueType>
  },
  // 是否禁用
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  // 原生name属性
  name: {
    type: String
  },
  // 标签label
  label: {
    type: String
  },
  // size 尺寸
  size: {
    type: String as PropType<Size>
  }
}

export const radioEmits = {
  // v-model语法糖支持 - 当输入值改变时触发
  'update:modelValue': (value: RadioValueType) =>
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean',
  // change事件 - 绑定值发生变化时触发
  change: (value: RadioValueType) =>
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = typeof radioEmits
