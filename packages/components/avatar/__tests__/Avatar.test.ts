import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Avatar from '../src/Avatar.vue'
import type { Shape, Size, Fit } from '../src/type'

// Mock ne-icon 组件
const MockIcon = {
  name: 'ne-icon',
  props: ['icon'],
  template: '<i class="mock-icon">{{ icon }}</i>'
}

describe('Avatar组件', () => {
  describe('头像内容渲染', () => {
    test('默认插槽内容', () => {
      const wrapper = mount(Avatar, {
        slots: {
          default: 'User'
        }
      })
      expect(wrapper.text()).toContain('User')
    })
    test('图标渲染', () => {
      const mockIcon = { name: 'user' }
      const wrapper = mount(Avatar, {
        props: { icon: mockIcon },
        global: { components: { 'ne-icon': MockIcon } }
      })
      expect(wrapper.findComponent(MockIcon).exists()).toBe(true)
    })
    test('图片渲染', () => {
      const imgUrl = 'test.jpg'
      const wrapper = mount(Avatar, {
        props: { src: imgUrl, alt: 'test' }
      })
      const img = wrapper.find('img')
      expect(img.exists()).toBe(true)
      expect(img.attributes('src')).toBe(imgUrl)
      expect(img.attributes('alt')).toBe('test')
    })
  })
  describe('Props测试', () => {
    test('shape 属性', () => {
      const shapes: Shape[] = ['circle', 'square']
      shapes.forEach((shape) => {
        const wrapper = mount(Avatar, {
          props: { shape }
        })
        expect(wrapper.classes()).toContain(`ne-avatar--${shape}`)
      })
    })
    test('size属性 - string类型', () => {
      const sizes: Size[] = ['small', 'default', 'large']
      sizes.forEach((size) => {
        const wrapper = mount(Avatar, {
          props: { size }
        })
        expect(wrapper.classes()).toContain(`ne-avatar--${size}`)
      })
    })
    test('size属性 - number类型', () => {
      const size = 23
      const wrapper = mount(Avatar, {
        props: { size }
      })
      expect(wrapper.attributes('style')).toContain(`width: ${size}px`)
      expect(wrapper.attributes('style')).toContain(`height: ${size}px`)
    })
    test('fit 属性', () => {
      const fits: Fit[] = ['fill', 'contain', 'cover', 'none', 'scale-down']
      const imgUrl = 'test.jpg'
      fits.forEach((fit) => {
        const wrapper = mount(Avatar, {
          props: { src: imgUrl, fit }
        })
        const img = wrapper.find('img')
        expect(img.attributes('style')).toContain(`object-fit: ${fit}`)
      })
    })
  })
})
