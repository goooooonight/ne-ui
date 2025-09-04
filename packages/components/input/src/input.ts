import type { PropType, ExtractPropTypes } from 'vue'
import type { Size, Type } from './type'

export const inputProps = {
  // 输入框尺寸
  size: {
    type: String as PropType<Size>,
    default: 'default'
  },
  // 输入框类型
  type: {
    type: String as PropType<Type>,
    default: 'text'
  },
  // 密码框属性
  showPassword: {
    type: Boolean,
    default: false
  }
}

export type ButtonProps = ExtractPropTypes<typeof inputProps>
// export type InputEmits = typeof inputEmits
