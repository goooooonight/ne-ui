import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from '../src/Card.vue'
import { Shadow } from '../src/type'

describe('Card组件', () => {
  // 基础 props 测试
  describe('Props测试', () => {
    test('header属性', () => {
      const header = 'test'
      const wrapper = mount(Card, {
        props: { header }
      })
      expect(wrapper.text()).toContain(header)
    })
    test('footer属性', () => {
      const footer = 'test'
      const wrapper = mount(Card, {
        props: { footer }
      })
      expect(wrapper.text()).toContain(footer)
    })
    test('shadow属性', () => {
      const shadows: Shadow[] = ['always', 'hover', 'never']
      shadows.forEach((shadow) => {
        const wrapper = mount(Card, {
          props: { shadow }
        })
        expect(wrapper.classes()).toContain(`is-${shadow}-shadow`)
      })
    })
    test('bordered属性', () => {
      const wrapper = mount(Card, {
        props: { bordered: false }
      })
      expect(wrapper.classes()).not.toContain('is-bordered')
    })
  })

  // 插槽功能测试
  describe('插槽测试', () => {
    test('header插槽', () => {
      const header = 'This is Title'
      const wrapper = mount(Card, {
        slots: { header }
      })
      expect(wrapper.text()).toContain(header)
    })
    test('footer插槽', () => {
      const footer = 'This is Footer'
      const wrapper = mount(Card, {
        slots: { footer }
      })
      expect(wrapper.text()).toContain(footer)
    })
    test('默认插槽', () => {
      const defaultSlot = 'This is Default'
      const wrapper = mount(Card, {
        slots: { default: defaultSlot }
      })
      expect(wrapper.text()).toContain(defaultSlot)
    })
  })

  // 自定义类名测试
  describe('自定义类名测试', () => {
    test('', () => {
      // 自定义类名
      const headerClass = 'customHeaderClass'
      const bodyClass = 'customBodyClass'
      const footerClass = 'customFooterClass'
      const wrapper = mount(Card, {
        props: {
          header: 'Header',
          headerClass,
          bodyClass,
          footer: 'Footer',
          footerClass
        },
        slots: { default: 'Body' }
      })
      // 获取对应元素
      const headerEl = wrapper.find('.ne-card__header')
      const bodyEl = wrapper.find('.ne-card__body')
      const footerEl = wrapper.find('.ne-card__footer')
      expect(headerEl.classes()).toContain(headerClass)
      expect(bodyEl.classes()).toContain(bodyClass)
      expect(footerEl.classes()).toContain(footerClass)
    })
  })
})
