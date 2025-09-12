import type { PropType, ExtractPropTypes } from 'vue'
import type { RadioValueType } from './type'

export const radioButtonProps = {
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
  }
}

export type RadioProps = ExtractPropTypes<typeof radioButtonProps>
