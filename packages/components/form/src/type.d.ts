import type { RuleItem, ValidateFieldsError } from 'async-validator'

export type Arrayable<T> = T | T[]

/** @description 组件尺寸类型 */
export type Size = 'small' | 'default' | 'large'

/** @description 表单项规则 */
export interface FormItemRules extends RuleItem {
  trigger?: Arrayable<string>
}

/** @description 表单规则 */
export type FormRules = Record<string, Arrayable<FormItemRules>>

/** @description 表单校验回调函数类型 */
export type FormValidateCallback = (
  isValid: boolean,
  invalidFields?: ValidateFieldsError
) => void
