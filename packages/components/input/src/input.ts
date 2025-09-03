import type { PropType, ExtractPropTypes } from 'vue'
import type { Size } from './type'

export const inputProps = {
  // 输入框尺寸
  size: {
    type: String as PropType<Size>,
    default: 'default'
  }
}

export type ButtonProps = ExtractPropTypes<typeof inputProps>
// export type InputEmits = typeof inputEmits
