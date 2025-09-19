import type { PropType, ExtractPropTypes } from 'vue'
import type { Type } from './type'

// Message默认显示时间
export const DEFAULT_MESSAGE_DURATION = 3000

// Message组件的props定义
export const messageProps = {
  // 消息文字
  message: {
    type: String
  },
  // 消息类型
  type: {
    type: String as PropType<Type>,
    default: 'primary'
  },
  // 显示时间
  duration: {
    type: Number,
    default: DEFAULT_MESSAGE_DURATION
  },
  // 是否可关闭
  closable: {
    type: Boolean,
    default: false
  },
  // 自定义类名
  customClass: {
    type: String
  }
} as const // 只读

export type MessageProps = Partial<ExtractPropTypes<typeof messageProps>>

// Message API类型
export type MessageFn = (options: MessageProps) => void
// Message各类型 API类型
export type MessageTypedFn = (
  options: Omit<MessageProps, 'type'> | string
) => void
// Message类型
export type Message = MessageFn & {
  primary: MessageTypedFn
  success: MessageTypedFn
  warning: MessageTypedFn
  info: MessageTypedFn
  error: MessageTypedFn
}
