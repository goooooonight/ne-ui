import type { PropType, ExtractPropTypes } from 'vue'
import type { Type } from './type'

/**
 * Message组件的props定义
 */
export const messageProps = {
  // 消息文字
  message: {
    type: String
  },
  // 消息类型
  type: {
    type: String as PropType<Type>,
    default: 'primary'
  }
} as const // 只读

export type MessageProps = ExtractPropTypes<typeof messageProps>
