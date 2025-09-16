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
  },
  // header 自定义类名
  headerClass: {
    type: String
  },
  // body 自定义类名
  bodyClass: {
    type: String
  },
  // footer 自定义类名
  footerClass: {
    type: String
  },
  // 是否显示卡片边框
  bordered: {
    type: Boolean,
    default: true
  }
} as const // 只读

export type CardProps = ExtractPropTypes<typeof cardProps>
