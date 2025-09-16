import type { ExtractPropTypes } from 'vue'

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
  }
} as const // 只读

export type CardProps = ExtractPropTypes<typeof cardProps>
