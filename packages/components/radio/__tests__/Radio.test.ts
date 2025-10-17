import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Radio from '../src/Radio.vue'

describe('Radio组件', () => {
  describe('基本渲染', () => {
    test('基本渲染', () => {
      const wrapper = mount(Radio, {
        props: {
          value: 'test'
        }
      })

      expect(wrapper.classes()).toContain('ne-radio')
      expect(wrapper.find('input[type="radio"]').exists()).toBe(true)
    })

    test('渲染标签内容', () => {
      const wrapper = mount(Radio, {
        props: {
          value: 'test',
          label: '测试标签'
        }
      })

      expect(wrapper.text()).toContain('测试标签')
    })

    test('渲染插槽内容', () => {
      const wrapper = mount(Radio, {
        props: {
          value: 'test'
        },
        slots: {
          default: '插槽内容'
        }
      })

      expect(wrapper.text()).toContain('插槽内容')
    })
  })

  describe('Prop测试', () => {
    test('modelValue 属性', () => {
      const wrapper = mount(Radio, {
        props: {
          modelValue: 'test',
          value: 'test'
        }
      })

      const input = wrapper.find('input')
      expect((input.element as HTMLInputElement).checked).toBe(true)
      expect(wrapper.classes()).toContain('is-checked')
    })

    test('disabled 属性', () => {
      const wrapper = mount(Radio, {
        props: {
          value: 'test',
          disabled: true
        }
      })

      const input = wrapper.find('input')
      expect((input.element as HTMLInputElement).disabled).toBe(true)
      expect(wrapper.classes()).toContain('is-disabled')
    })

    test('size 属性', () => {
      const sizes = ['small', 'default', 'large']

      sizes.forEach((size) => {
        const wrapper = mount(Radio, {
          props: {
            size: size as 'small' | 'default' | 'large'
          }
        })
        expect(wrapper.classes()).toContain(`ne-radio--${size}`)
      })
    })

    test('name 属性', () => {
      const wrapper = mount(Radio, {
        props: {
          value: 'test',
          name: 'test-name'
        }
      })

      const input = wrapper.find('input')
      expect((input.element as HTMLInputElement).name).toBe('test-name')
    })
  })
})
