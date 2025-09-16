import type { PropType, ExtractPropTypes } from 'vue'
import type { Shadow } from './type'

/**
 * Card组件的props定义
 */
export const cardProps = {
  // 卡片标题
  header: {
    type: String
  },
  // 卡片页脚
  footer: {
    type: String
  },
  // 阴影触发时机
  shadow: {
    type: String as PropType<Shadow>,
    default: 'never'
  }
} as const // 只读

export type CardProps = ExtractPropTypes<typeof cardProps>
