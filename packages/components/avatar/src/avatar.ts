import type { PropType, ExtractPropTypes } from 'vue'
import type { Size, Shape, Fit } from './type'

export const avatarProps = {
  // 头像形状
  shape: {
    type: String as PropType<Shape>,
    default: 'circle'
  },
  // 尺寸
  size: {
    type: [String, Number] as PropType<Size | number>,
    default: 'default'
  },
  // 自定义图标
  icon: {
    type: Object
  },
  // 图片地址
  src: {
    type: String
  },
  // 图片适应类型
  fit: {
    type: String as PropType<Fit>,
    default: 'cover'
  },
  // 图片原生 alt 属性
  alt: {
    type: String
  },
  // 图片原生 src-set 属性
  srcset: {
    type: String
  }
}

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
