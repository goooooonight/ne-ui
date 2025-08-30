import type { PropType, ExtractPropTypes } from 'vue'
import type { Type, Size, IconPlacement, NativeType } from './type'

// 组件props
export const buttonProps = {
  // 按钮类型
  type: {
    type: String as PropType<Type>,
    default: 'default'
  },
  // 按钮尺寸
  size: {
    type: String as PropType<Size>,
    default: 'default'
  },
  // 圆角按钮
  round: {
    type: Boolean,
    default: false
  },
  // 朴素按钮
  plain: {
    type: Boolean,
    default: false
  },
  // 文字按钮
  text: {
    type: Boolean,
    default: false
  },
  // 圆形按钮
  circle: {
    type: Boolean,
    default: false
  },
  // 按钮是否禁用
  disabled: {
    type: Boolean,
    default: false
  },
  // 按钮原生类型
  nativeType: {
    type: String as PropType<NativeType>,
    default: 'button'
  },
  // 图标
  icon: {
    type: Object
  },
  // 按钮图标位置
  iconPlacement: {
    type: String as PropType<IconPlacement>,
    default: 'left'
  }
} as const // 只读

// 组件emits
export const buttonEmits = {
  // eslint-disable-next-line no-undef
  click: (evt: MouseEvent) => evt instanceof MouseEvent
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits
