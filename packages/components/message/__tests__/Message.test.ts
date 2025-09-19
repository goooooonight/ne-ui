import { describe, expect, test, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Message from '../src/Message.vue'
import MessageAPI from '../src/message-service'
import { Type } from '../src/type'
import { nextTick } from 'vue'

// 消息类型数组
const types: Type[] = ['primary', 'success', 'error', 'warning', 'info']

// 测试消息内容
const message = 'hello world'

// 用 fake timers 来控制 setTimeout
vi.useFakeTimers()

describe('Message组件', () => {
  // 基本渲染测试
  describe('基本渲染', () => {
    test('message属性', () => {
      const wrapper = mount(Message, {
        props: { message }
      })
      expect(wrapper.text()).toContain(message)
    })
  })
  // Props测试
  describe('Props测试', () => {
    test('type 属性', () => {
      types.forEach((type) => {
        const wrapper = mount(Message, {
          props: { type }
        })
        const iconEl = wrapper.find('.ne-message__icon')
        expect(iconEl.classes()).toContain(`ne-message__icon--${type}`)
      })
    })
    test('closable 属性', () => {
      const closable = true
      const wrapper = mount(Message, {
        props: { closable }
      })
      expect(wrapper.find('.ne-message--closeBtn').exists()).toBe(true)
    })
    test('customClass 属性', () => {
      const customClass = 'my-class'
      const wrapper = mount(Message, {
        props: { customClass }
      })
      const messageEl = wrapper.find('.ne-message')
      expect(messageEl.classes()).toContain(customClass)
    })
  })
})

describe('Message API', () => {
  beforeEach(() => {
    // 清空 body，避免上一次测试遗留
    document.body.innerHTML = ''
  })

  afterEach(() => {
    // 清空计时器
    vi.clearAllTimers()
  })

  test('内容渲染', async () => {
    MessageAPI(message)
    await nextTick()

    const container = document.querySelector('.ne-message--container')
    expect(container).not.toBeNull()
    expect(container!.textContent).toContain(message)
  })

  test('持续一段时间后自动销毁', async () => {
    MessageAPI(message)
    await nextTick()

    const container = document.querySelector('.ne-message--container')
    expect(container).not.toBeNull()

    // 验证消息内容是否可见
    const messageEl = container?.querySelector('.ne-message') as HTMLDivElement
    expect(messageEl.textContent).toBe(message)
    expect(messageEl?.style.display).not.toBe('none')

    // 跑时间，触发定时器
    vi.advanceTimersByTime(3000)
    await nextTick()

    // 验证消息元素已经隐藏
    expect(messageEl.style.display).toBe('none')
  })

  test('Message[Type]方法测试', async () => {
    types.forEach((type) => {
      MessageAPI[type](message)
    })
    await nextTick()

    const containers = document.querySelectorAll('.ne-message--container')
    expect(containers.length).toBe(types.length)

    containers.forEach((container) => {
      const messageEl = container.querySelector('.ne-message') as HTMLDivElement
      expect(messageEl.textContent).toContain(message)
    })
  })
})
