import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import CheckboxGroup from '../src/CheckboxGroup.vue'
import Checkbox from '../src/Checkbox.vue'

describe('CheckboxGroup组件', () => {
  //  测试基本渲染功能
  test('基本渲染', () => {
    const wrapper = mount(CheckboxGroup)
    expect(wrapper.classes()).toContain('ne-checkbox-group')
  })

  // 测试插槽内容渲染
  test('渲染插槽内容', () => {
    const wrapper = mount(CheckboxGroup, {
      slots: {
        default: `
          <ne-checkbox value="option1">选项1</ne-checkbox>
          <ne-checkbox value="option2">选项2</ne-checkbox>
        `
      },
      global: {
        components: {
          'ne-checkbox': Checkbox
        }
      }
    })

    const checkboxes = wrapper.findAllComponents(Checkbox)
    expect(checkboxes).toHaveLength(2)
  })

  // 测试modelValue属性
  test('modelValue 属性', () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        modelValue: ['option1']
      },
      slots: {
        default: `
          <ne-checkbox value="option1">选项1</ne-checkbox>
          <ne-checkbox value="option2">选项2</ne-checkbox>
        `
      },
      global: {
        components: {
          'ne-checkbox': Checkbox
        }
      }
    })

    const checkboxes = wrapper.findAllComponents(Checkbox)

    // 验证选中状态
    expect(checkboxes[0].classes()).toContain('is-checked')
    expect(checkboxes[1].classes()).not.toContain('is-checked')
  })

  // 测试disabled属性
  test('disabled 属性', () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        disabled: true
      },
      slots: {
        default: `
          <ne-checkbox value="option1">选项1</ne-checkbox>
          <ne-checkbox value="option2">选项2</ne-checkbox>
        `
      },
      global: {
        components: {
          'ne-checkbox': Checkbox
        }
      }
    })

    const checkboxes = wrapper.findAllComponents(Checkbox)

    // 验证所有checkbox都被禁用
    checkboxes.forEach((checkbox) => {
      expect(checkbox.classes()).toContain('is-disabled')
    })
  })
})
