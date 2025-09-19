import MessageComponent from './Message.vue'
import { h, render, type VNode } from 'vue'
import {
  DEFAULT_MESSAGE_DURATION,
  type MessageProps,
  type Message,
  type MessageTypedFn
} from './message'
import type { Type } from './type'

// top属性常量
const TOP_INIT = 30
const TOP_GAP = 50

// 实例化数组
const instances: HTMLDivElement[] = []

// 销毁Message
const destory = (VNode: VNode, duration = DEFAULT_MESSAGE_DURATION) => {
  // 如果duration为0 则不销毁Message
  if (duration === 0) return
  setTimeout(() => {
    const componentInstance = VNode.component?.exposed
    componentInstance?.close()
  }, duration)
}

// Message组件构造函数
const message = (options: MessageProps) => {
  const container = document.createElement('div')
  container.setAttribute('class', 'ne-message--container')
  // 计算top样式
  container.style.top = `${TOP_INIT + instances.length * TOP_GAP}px`
  instances.push(container)
  document.body.append(container)

  // 绑定Message组件消失动画结束后的销毁函数
  const onDestory = () => {
    // 移出dom结构
    if (container.parentElement) {
      container.parentElement.removeChild(container)
    }
    // 从实例化数组中删除
    const index = instances.indexOf(container)
    instances.splice(index, 1)
    // 调整剩余Message的top
    instances.forEach((instance) => {
      const top = parseInt(instance.style.top)
      instance.style.top = `${top - TOP_GAP}px`
    })
  }
  // 创建并渲染VNode节点
  const VNode = h(MessageComponent, {
    ...options,
    onDestroy: onDestory // 监听destroy事件
  })
  render(VNode, container)
  // 指定时间后销毁
  destory(VNode, options.duration)
}

// Message API式调用入口
const NeMessage = ((options: MessageProps) => {
  message(options)
}) as Message

// 格式化传入参数
const normalizeOptions = (options: Omit<MessageProps, 'type'> | string) => {
  if (typeof options === 'string') {
    return { message: options }
  }
  return options
}

// 为不同类型的消息添加快捷方法
const types: Type[] = ['primary', 'success', 'warning', 'error', 'info']
types.forEach((type) => {
  NeMessage[type] = ((options) => {
    const normalized = normalizeOptions(options)
    message({
      ...normalized,
      type
    })
  }) as MessageTypedFn
})

export default NeMessage
