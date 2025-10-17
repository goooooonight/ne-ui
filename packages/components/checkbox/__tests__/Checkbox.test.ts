import { describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Checkbox from '../src/Checkbox.vue'

describe('Checkbox组件', () => {
  // 基本渲染测试
  describe('基本渲染', () => {
    test('基本渲染', () => {
      const wrapper = mount(Checkbox)
      expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
      expect(wrapper.classes()).toContain('ne-checkbox')
    })

    test('渲染标签文本', () => {
      const wrapper = mount(Checkbox, {
        props: {
          label: '选择项'
        }
      })
      expect(wrapper.text()).toContain('选择项')
    })

    test('渲染插槽内容', () => {
      const wrapper = mount(Checkbox, {
        slots: {
          default: '自定义内容'
        }
      })
      expect(wrapper.text()).toContain('自定义内容')
    })
  })

  // Props测试
  describe('Props测试', () => {
    // modelValue 属性测试
    test('modelValue 属性', () => {
      const wrapper = mount(Checkbox, {
        props: {
          modelValue: true
        }
      })
      expect(wrapper.classes()).toContain('is-checked')
    })

    // value 属性测试
    test('value 属性', () => {
      const wrapper = mount(Checkbox, {
        props: {
          value: 'option1'
        }
      })
      const input = wrapper.find('input[type="checkbox"]')
      expect(input.attributes('value')).toBe('option1')
    })

    // disabled 属性测试
    test('disabled 属性', () => {
      const wrapper = mount(Checkbox, {
        props: {
          disabled: true
        }
      })
      const input = wrapper.find('input[type="checkbox"]')
      expect(input.attributes('disabled')).toBeDefined()
      expect(wrapper.classes()).toContain('is-disabled')
    })

    // size 属性测试
    test('size 属性', () => {
      const sizes = ['small', 'default', 'large']

      sizes.forEach((size) => {
        const wrapper = mount(Checkbox, {
          props: {
            size: size as 'small' | 'default' | 'large'
          }
        })
        expect(wrapper.classes()).toContain(`ne-checkbox--${size}`)
      })
    })

    // indeterminate 属性测试
    test('indeterminate 属性', () => {
      const wrapper = mount(Checkbox, {
        props: {
          indeterminate: true
        }
      })
      expect(wrapper.classes()).toContain('is-indeterminate')
    })

    // name 属性测试
    test('name 属性', () => {
      const wrapper = mount(Checkbox, {
        props: {
          name: 'test-checkbox'
        }
      })
      const input = wrapper.find('input[type="checkbox"]')
      expect(input.attributes('name')).toBe('test-checkbox')
    })
  })

  // 功能测试
  describe('功能测试', () => {
    test('点击切换选中状态', async () => {
      const onChange = vi.fn()
      const wrapper = mount(Checkbox, {
        props: {
          modelValue: false,
          onChange
        }
      })

      const input = wrapper.find('input[type="checkbox"]')
      await input.setValue(true)
      await input.trigger('change')

      expect(wrapper.emitted('change')).toBeTruthy()
      expect(wrapper.emitted('change')?.[0]).toEqual([true])
    })

    test('禁用状态下不能切换', async () => {
      const wrapper = mount(Checkbox, {
        props: {
          modelValue: false,
          disabled: true
        }
      })

      const input = wrapper.find('input[type="checkbox"]')
      await input.setValue(true)
      await input.trigger('change')

      // 禁用状态下不应该触发事件
      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
      expect(wrapper.emitted('change')).toBeFalsy()
    })
  })
})
