import type { InjectionKey } from 'vue'
import type { FormProps } from './form'
import type { FormItemContext } from './form-item-key'

/**
 * Form 上下文类型定义
 */
export interface FormContext extends FormProps {
  addField: (field: FormItemContext) => void
}

/**
 * Form 注入键
 * 用于在 Form 和 FormItem 组件之间进行类型安全的依赖注入
 */
export const formKey: InjectionKey<FormContext> = Symbol('form')
