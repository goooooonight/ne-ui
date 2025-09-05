import type { PropType, ExtractPropTypes } from 'vue'
import type { Size, Type } from './type'

export const inputProps = {
  // 绑定值
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  // 输入框尺寸
  size: {
    type: String as PropType<Size>,
    default: 'default'
  },
  // 输入框类型
  type: {
    type: String as PropType<Type>,
    default: 'text'
  },
  // 密码框属性
  showPassword: {
    type: Boolean,
    default: false
  },
  // 占位文本
  placeholder: {
    type: String
  },
  // 禁用状态
  disabled: {
    type: Boolean,
    default: false
  }
}

export const inputEmits = {
  // v-model语法糖支持 - 当输入值改变时触发
  'update:modelValue': (value: string | number) =>
    typeof value === 'string' || typeof value === 'number',
  // 输入事件 - 当用户输入时触发
  input: (value: string | number) =>
    typeof value === 'string' || typeof value === 'number',
  // 焦点事件
  focus: (event: FocusEvent) => event instanceof FocusEvent,
  // 失焦事件
  blur: (event: FocusEvent) => event instanceof FocusEvent
}

export type ButtonProps = ExtractPropTypes<typeof inputProps>
// export type InputEmits = typeof inputEmits
