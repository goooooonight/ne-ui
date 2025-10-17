import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Loading from '../src/Loading.vue'
import { nextTick } from 'vue'

describe('Loading组件', () => {
  // 在每个测试前设置假定时器
  beforeEach(() => {
    vi.useFakeTimers()
  })

  // 在每个测试后恢复定时器
  afterEach(() => {
    vi.runOnlyPendingTimers()
    vi.useRealTimers()
  })

  // 基础功能测试
  describe('基础功能测试', () => {
    test('应该正确渲染组件', () => {
      const wrapper = mount(Loading, {
        props: {
          visible: true
        }
      })
      expect(wrapper.find('.ne-loading__mask').exists()).toBe(true)
      expect(wrapper.find('.ne-loading__spinner').exists()).toBe(true)
    })

    test('当 visible 为 false 时不显示', () => {
      const wrapper = mount(Loading, {
        props: {
          visible: false
        }
      })

      expect(wrapper.find('.ne-loading__mask').exists()).toBe(false)
    })
  })

  // Props 属性测试
  describe('Props 测试', () => {
    test('text 属性', () => {
      const testText = '正在加载中...'
      const wrapper = mount(Loading, {
        props: {
          visible: true,
          text: testText
        }
      })

      expect(wrapper.find('.ne-loading__text').exists()).toBe(true)
      expect(wrapper.find('.ne-loading__text').text()).toBe(testText)
    })

    test('background 属性', () => {
      const backgroundColor = 'rgba(35, 35, 35, 0.733)'
      const wrapper = mount(Loading, {
        props: {
          visible: true,
          background: backgroundColor
        }
      })

      const mask = wrapper.find('.ne-loading__mask')
      expect(mask.attributes('style')).toContain(
        `background-color: ${backgroundColor}`
      )
    })

    test('delay 属性', async () => {
      const wrapper = mount(Loading, {
        props: {
          visible: true,
          delay: 1000
        }
      })

      // 初始状态不应该显示加载动画
      expect(wrapper.find('.ne-loading__mask').exists()).toBe(false)

      // 快进时间到延迟时间
      vi.advanceTimersByTime(1000)
      await nextTick()

      // 延迟后应该显示加载动画
      expect(wrapper.find('.ne-loading__mask').exists()).toBe(true)
    })
  })

  // 插槽功能测试
  describe('插槽功能', () => {
    test('icon 插槽 - 自定义图标', () => {
      const wrapper = mount(Loading, {
        props: { visible: true },
        slots: {
          icon: '<div class="custom-icon">自定义图标</div>'
        }
      })

      expect(wrapper.find('.custom-icon').exists()).toBe(true)
      expect(wrapper.find('.custom-icon').text()).toBe('自定义图标')
      // 默认图标不应该存在
      expect(wrapper.find('.ne-loading__circular').exists()).toBe(false)
    })

    test('text 插槽 - 自定义文本', () => {
      const wrapper = mount(Loading, {
        props: {
          visible: true,
          text: 'prop text'
        },
        slots: {
          text: '<span class="custom-text">slot text</span>'
        }
      })

      expect(wrapper.find('.custom-text').exists()).toBe(true)
      expect(wrapper.find('.custom-text').text()).toBe('slot text')
    })
  })
})
