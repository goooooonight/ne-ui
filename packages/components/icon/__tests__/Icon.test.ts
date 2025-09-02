import { describe, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import Icon from '../src/Icon.vue'

describe('Icon组件', () => {
  test('color 属性', () => {
    const wrapper = mount(Icon, {
      props: {
        color: '#123456'
      }
    })
    expect(wrapper.attributes('style')).toContain('color')
  })
  test('size 属性', () => {
    const wrapper = mount(Icon, {
      props: {
        size: '20'
      }
    })
    expect(wrapper.attributes('style')).toContain('size')
  })
  test('icon 属性 - 通过props传入组件', () => {
    // 创建测试用Mock组件
    const MockIcon = {
      name: 'MockIcon',
      template: '<span class="mock-icon">📧</span>'
    }
    const wrapper = mount(Icon, {
      props: {
        icon: MockIcon
      }
    })
    // 验证通过props.icon传入的组件是否正确渲染
    expect(wrapper.findComponent(MockIcon).exists()).toBe(true)
    expect(wrapper.find('.mock-icon').exists()).toBe(true) // dom渲染测试
  })

  test('默认插槽内容 - 覆盖icon属性', () => {
    // 创建测试用Mock组件
    const SlotIcon = {
      name: 'SlotIcon',
      template: '<span class="slot-icon">🎯</span>'
    }
    const PropIcon = {
      name: 'PropIcon',
      template: '<span class="prop-icon">📧</span>'
    }
    const wrapper = mount(Icon, {
      props: {
        icon: PropIcon // 这个会被插槽内容覆盖
      },
      slots: {
        default: SlotIcon
      }
    })
    // 插槽内容应该覆盖props.icon
    expect(wrapper.findComponent(SlotIcon).exists()).toBe(true)
    expect(wrapper.findComponent(PropIcon).exists()).toBe(false)
    expect(wrapper.find('.slot-icon').exists()).toBe(true) // dom渲染测试
  })
})
