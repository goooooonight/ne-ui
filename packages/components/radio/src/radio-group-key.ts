import type { InjectionKey, Ref } from 'vue'

/**
 * RadioGroup上下文类型定义
 */
export interface RadioGroupContext {
  /** v-model绑定值 */
  modelValue: Ref<string | number | boolean | undefined>
  /** 禁用状态 */
  disabled: Ref<boolean>
  /** 更新选中值的方法 */
  updateValue: (value: string | number | boolean | undefined) => void
}

/**
 * RadioGroup注入键
 * 用于在RadioGroup和Radio组件之间进行类型安全的依赖注入
 */
export const radioGroupKey: InjectionKey<RadioGroupContext> =
  Symbol('radioGroup')
