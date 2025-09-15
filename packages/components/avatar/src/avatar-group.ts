import type { PropType, ExtractPropTypes } from 'vue'
import type { Size, Shape } from './type'

export const avatarGroupProps = {
  // 头像形状
  shape: {
    type: String as PropType<Shape>,
    default: 'circle'
  },
  // 尺寸
  size: {
    type: [String, Number] as PropType<Size | number>,
    default: 'default'
  }
}

export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>
