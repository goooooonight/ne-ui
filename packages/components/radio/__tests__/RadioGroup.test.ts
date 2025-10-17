import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import RadioGroup from '../src/RadioGroup.vue'
import Radio from '../src/Radio.vue'

describe('RadioGroup组件', () => {
  test('基本渲染', () => {
    const wrapper = mount(RadioGroup)

    expect(wrapper.classes()).toContain('ne-radio-group')
  })

  test('渲染插槽内容', () => {
    const wrapper = mount(RadioGroup, {
      slots: {
        default: `
          <Radio value="option1" label="选项1" />
          <Radio value="option2" label="选项2" />
        `
      },
      global: {
        components: {
          Radio
        }
      }
    })

    expect(wrapper.text()).toContain('选项1')
    expect(wrapper.text()).toContain('选项2')
  })

  test('modelValue 属性', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        modelValue: 'option1'
      },
      slots: {
        default: `
          <Radio value="option1" label="选项1" />
          <Radio value="option2" label="选项2" />
        `
      },
      global: {
        components: {
          Radio
        }
      }
    })

    const radios = wrapper.findAllComponents(Radio)
    expect(radios[0].classes()).toContain('is-checked')
    expect(radios[1].classes()).not.toContain('is-checked')
  })

  test('disabled 属性', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        disabled: true
      },
      slots: {
        default: `
          <Radio value="option1" label="选项1" />
          <Radio value="option2" label="选项2" />
        `
      },
      global: {
        components: {
          Radio
        }
      }
    })

    const radios = wrapper.findAllComponents(Radio)
    radios.forEach((radio) => {
      expect(radio.classes()).toContain('is-disabled')
    })
  })
})
