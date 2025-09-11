import type { PropType, ExtractPropTypes } from 'vue'

export const radioProps = {
  // v-model绑定的值
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>
  },
  // radio的值
  value: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>
  },
  // 是否禁用
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  }
}

export const radioEmits = {
  'update:modelValue': (value: string | number | boolean) =>
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = typeof radioEmits
