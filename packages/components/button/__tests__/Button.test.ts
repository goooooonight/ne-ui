import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../src/Button.vue'
import type { Type, Size, NativeType } from '../src/type.d'

// Mock ne-icon 组件
const MockIcon = {
  name: 'ne-icon',
  props: ['icon'],
  template: '<i class="mock-icon">{{ icon }}</i>'
}

describe('Button组件', () => {
  // 基础功能测试
  describe('基础功能', () => {
    test('默认插槽内容', () => {
      const wrapper = mount(Button, {
        slots: {
          default: 'Button Text'
        }
      })
      expect(wrapper.text()).toContain('Button Text')
    })
  })

  // Props 测试
  describe('Props 测试', () => {
    test('type 属性 - 生成对应样式类', () => {
      const types: Type[] = [
        'primary',
        'success',
        'warning',
        'danger',
        'info',
        'default'
      ]

      types.forEach((type) => {
        const wrapper = mount(Button, {
          props: { type }
        })
        expect(wrapper.classes()).toContain(`ne-button--${type}`)
      })
    })

    test('size 属性 - 生成对应样式类', () => {
      const sizes: Size[] = ['small', 'default', 'large']

      sizes.forEach((size) => {
        const wrapper = mount(Button, {
          props: { size }
        })
        expect(wrapper.classes()).toContain(`ne-button--${size}`)
      })
    })

    test('nativeType 属性 - 设置原生type属性', () => {
      const nativeTypes: NativeType[] = ['button', 'submit', 'reset']

      nativeTypes.forEach((nativeType) => {
        const wrapper = mount(Button, {
          props: { nativeType }
        })
        expect(wrapper.attributes('type')).toBe(nativeType)
      })
    })

    test('disabled 属性 - 禁用状态', () => {
      const wrapper = mount(Button, {
        props: { disabled: true }
      })
      expect(wrapper.attributes('disabled')).toBeDefined()
      expect(wrapper.classes()).toContain('is-disabled')
    })

    test('round 属性 - 圆角样式', () => {
      const wrapper = mount(Button, {
        props: { round: true }
      })
      expect(wrapper.classes()).toContain('is-round')
    })

    test('plain 属性 - 朴素样式', () => {
      const wrapper = mount(Button, {
        props: { plain: true }
      })
      expect(wrapper.classes()).toContain('is-plain')
    })

    test('text 属性 - 文字样式', () => {
      const wrapper = mount(Button, {
        props: { text: true }
      })
      expect(wrapper.classes()).toContain('is-text')
    })

    test('circle 属性 - 圆形样式', () => {
      const wrapper = mount(Button, {
        props: { circle: true }
      })
      expect(wrapper.classes()).toContain('is-circle')
    })
  })

  // 图标功能测试
  describe('图标功能', () => {
    test('icon 位置 - 左侧）', () => {
      const mockIconData = { name: 'test-icon' }
      const wrapper = mount(Button, {
        props: {
          icon: mockIconData,
          iconPlacement: 'left'
        },
        global: {
          components: {
            'ne-icon': MockIcon
          }
        }
      })

      expect(wrapper.classes()).toContain('ne-button--icon-left')
      expect(wrapper.findComponent(MockIcon).exists()).toBe(true)
      expect(wrapper.findComponent(MockIcon).props('icon')).toEqual(
        mockIconData
      )
    })

    test('icon 位置 - 右侧', () => {
      const mockIconData = { name: 'test-icon' }
      const wrapper = mount(Button, {
        props: {
          icon: mockIconData,
          iconPlacement: 'right'
        },
        global: {
          components: {
            'ne-icon': MockIcon
          }
        }
      })

      expect(wrapper.classes()).toContain('ne-button--icon-right')
      expect(wrapper.findComponent(MockIcon).exists()).toBe(true)
    })
  })

  // 事件测试
  describe('事件处理', () => {
    test('点击事件 - 正常状态', () => {
      const wrapper = mount(Button)
      wrapper.trigger('click')
      expect(wrapper.emitted()).toHaveProperty('click')
      expect(wrapper.emitted('click')).toHaveLength(1) // 测试触发次数
    })

    test('禁用状态下不响应点击事件', () => {
      const wrapper = mount(Button, {
        props: { disabled: true }
      })
      wrapper.trigger('click')
      // 验证没有触发click事件
      expect(wrapper.emitted()).not.toHaveProperty('click')
    })
  })
})
