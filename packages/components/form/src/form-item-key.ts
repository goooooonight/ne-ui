import type { InjectionKey, Ref } from 'vue'

/**
 * FormItem 上下文类型定义
 */
export interface FormItemContext {
  formItemId: string
  disabled: Ref<boolean | undefined>
  validate: (trigger?: string) => Promise<boolean>
}

/**
 * FormItem 字段信息类型定义
 */
export interface FormFieldInfo {
  prop: string
  labelRef: Ref<HTMLElement | undefined>
  validate: (trigger?: string) => Promise<boolean>
  clearValidate: () => void
  resetField: () => void
}

/**
 * FormItem 注入键
 * 用于在 Form 和 FormItem 组件之间进行类型安全的依赖注入
 */
export const formItemKey: InjectionKey<FormItemContext> = Symbol('form')
