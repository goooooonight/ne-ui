import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from '../src/Input.vue'

describe('Input组件', () => {
  // 基本渲染测试
  describe('基本渲染', () => {
    test('基本渲染', () => {
      const wrapper = mount(Input)
      expect(wrapper.find('input').exists()).toBe(true)
      expect(wrapper.classes()).toContain('ne-input')
    })
  })

  // Props测试
  describe('Props测试', () => {
    // modelValue 属性测试
    test('modelValue 属性', () => {
      const wrapper = mount(Input, {
        props: {
          modelValue: 'test value'
        }
      })
      const input = wrapper.find('input')
      expect(input.element.value).toBe('test value')
    })

    // placeholder 属性测试
    test('placeholder 属性', () => {
      const wrapper = mount(Input, {
        props: {
          placeholder: '请输入内容'
        }
      })
      const input = wrapper.find('input')
      expect(input.attributes('placeholder')).toBe('请输入内容')
    })

    // disabled 属性测试
    test('disabled 属性', () => {
      const wrapper = mount(Input, {
        props: {
          disabled: true
        }
      })
      const input = wrapper.find('input')
      expect(input.attributes('disabled')).toBeDefined()
      expect(wrapper.classes()).toContain('is-disabled')
    })

    // size 属性测试
    test('size 属性', () => {
      const wrapper = mount(Input, {
        props: {
          size: 'large'
        }
      })
      expect(wrapper.classes()).toContain('ne-input--large')
    })

    // type 属性测试
    test('type 属性', () => {
      const wrapper = mount(Input, {
        props: {
          type: 'password'
        }
      })
      const input = wrapper.find('input')
      expect(input.attributes('type')).toBe('password')
    })

    // textarea 类型测试
    test('textarea 类型', () => {
      const wrapper = mount(Input, {
        props: {
          type: 'textarea',
          rows: 5
        }
      })
      expect(wrapper.find('textarea').exists()).toBe(true)
      expect(wrapper.find('input').exists()).toBe(false)
      expect(wrapper.find('textarea').attributes('rows')).toBe('5')
    })

    // showPassword 功能测试
    test('showPassword 功能', async () => {
      const wrapper = mount(Input, {
        props: {
          modelValue: 'password123',
          showPassword: true
        }
      })

      const input = wrapper.find('input')
      expect(input.attributes('type')).toBe('password')

      // 查找密码切换图标并点击
      const passwordToggle = wrapper.find('ne-icon')
      expect(passwordToggle.exists()).toBe(true)

      await passwordToggle.trigger('click')
      expect(input.attributes('type')).toBe('text')
    })

    // clearable 功能测试
    test('clearable 功能', async () => {
      const wrapper = mount(Input, {
        props: {
          modelValue: 'test content',
          clearable: true
        }
      })

      // 应该显示清除按钮
      const clearButton = wrapper.find('ne-icon')
      expect(clearButton.exists()).toBe(true)

      // 点击清除按钮
      await clearButton.trigger('click')

      // 验证是否触发了 update:modelValue 事件
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([''])
    })

    // maxlength 属性测试
    test('maxlength 属性', () => {
      const wrapper = mount(Input, {
        props: {
          maxlength: 10
        }
      })
      const input = wrapper.find('input')
      expect(input.attributes('maxlength')).toBe('10')
    })

    // showWordLimit 功能测试
    test('showWordLimit 功能', () => {
      const wrapper = mount(Input, {
        props: {
          modelValue: 'hello',
          maxlength: 10,
          showWordLimit: true
        }
      })

      const wordCount = wrapper.find('.ne-input__count-inner')
      expect(wordCount.exists()).toBe(true)
      expect(wordCount.text()).toBe('5 / 10')
    })
  })

  // 事件测试
  describe('事件测试', () => {
    // 输入事件测试
    test('input 事件', async () => {
      const wrapper = mount(Input)
      const input = wrapper.find('input')

      await input.setValue('new value')

      // 验证是否触发了相关事件
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
      expect(wrapper.emitted('input')).toBeTruthy()
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['new value'])
    })

    // focus 和 blur 事件测试
    test('focus 和 blur 事件', async () => {
      const wrapper = mount(Input)
      const input = wrapper.find('input')

      await input.trigger('focus')
      expect(wrapper.emitted('focus')).toBeTruthy()

      await input.trigger('blur')
      expect(wrapper.emitted('blur')).toBeTruthy()
    })
  })

  // 插槽测试
  describe('插槽测试', () => {
    // prepend 插槽测试
    test('prepend 插槽', () => {
      const wrapper = mount(Input, {
        slots: {
          prepend: '<span>前置内容</span>'
        }
      })

      const prepend = wrapper.find('.ne-input__prepend')
      expect(prepend.exists()).toBe(true)
      expect(prepend.text()).toBe('前置内容')
    })

    // append 插槽测试
    test('append 插槽', () => {
      const wrapper = mount(Input, {
        slots: {
          append: '<span>后置内容</span>'
        }
      })

      const append = wrapper.find('.ne-input__append')
      expect(append.exists()).toBe(true)
      expect(append.text()).toBe('后置内容')
    })
  })
})
