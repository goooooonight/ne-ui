import type { RuleItem } from 'async-validator'

export type Arrayable<T> = T | T[]

/** @description 表单项规则 */
export interface FormItemRules extends RuleItem {
  trigger?: Arrayable<string>
}

/** @description 表单规则 */
export type FormRules = Record<string, Arrayable<FormItemRules>>
