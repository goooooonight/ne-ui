import type { InjectionKey, Ref } from 'vue'

/**
 * CheckboxGroup上下文类型定义
 */
export interface CheckboxGroupContext {
  /** v-model绑定值 */
  modelValue: Ref<any>
  /** 禁用状态 */
  disabled: Ref<boolean>
  /** 可选中的最小数量 */
  min: Ref<number | undefined>
  /** 可选中的最大数量 */
  max: Ref<number | undefined>
  /** 尺寸 */
  size: Ref<string | undefined>
  /** 更新选中值的方法 */
  updateValue: (value: string[] | number[]) => void
}

/**
 * CheckboxGroup注入键
 * 用于在CheckboxGroup和Checkbox组件之间进行类型安全的依赖注入
 */
export const checkboxGroupKey: InjectionKey<CheckboxGroupContext> =
  Symbol('checkboxGroup')
