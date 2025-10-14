# Form 表单

## 基础用法

`Form` 表单组件包括各种输入表单项，比如 `input`、`upload`、`radio`、`checkbox` 等。

<demo vue="form/Basic.vue" />

## 行内表单

当垂直方向空间受限且表单较简单时，使用 `inline` 属性可以在一行内放置表单。

<demo vue="form/Inline.vue" />

## 表单禁用

通过设置 `disabled` 属性来禁用整个表单。

<demo vue="form/Disabled.vue" />

## 表单尺寸

通过设置 `size` 属性来改变表单内所有表单组件的尺寸。

<demo vue="form/Size.vue" />

## 标签布局

通过设置 `label-position` 属性可以改变表单项标签的位置，可选值为 `top`、`left`、`right`。

<demo vue="form/Label.vue" />

## 表单校验

`Form` 组件提供了表单校验的功能，只需要通过 `rules` 属性传入约定的验证规则，并将 `Form-Item` 的 `prop` 属性设置为需校验的字段名即可。

<demo vue="form/Validate.vue" />

## API

### Form Props

| 属性名                 | 类型                              | 默认值    | 说明                                                                                      |
| ---------------------- | --------------------------------- | --------- | ----------------------------------------------------------------------------------------- |
| model                  | `Record<string, any>`             | —         | 表单数据对象                                                                              |
| rules                  | `FormRules`                       | —         | 表单验证规则                                                                              |
| disabled               | `boolean`                         | `false`   | 是否禁用该表单内的所有组件                                                                |
| size                   | `'small' \| 'default' \| 'large'` | —         | 用于控制该表单内组件的尺寸                                                                |
| label-width            | `string \| number`                | `''`      | 表单项标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 `auto`。 |
| label-position         | `'left' \| 'right' \| 'top'`      | `'right'` | 表单项标签的位置                                                                          |
| hide-required-asterisk | `boolean`                         | `false`   | 是否隐藏必填字段的标签旁边的红色星号                                                      |
| show-message           | `boolean`                         | `true`    | 是否显示校验错误信息                                                                      |
| inline                 | `boolean`                         | `false`   | 行内表单模式                                                                              |

### Form Exposes

| 名称          | 说明                                                                                                        | 类型                                                 |
| ------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| validate      | 对整个表单进行校验的方法，参数为一个回调函数。若不传入回调函数，则会返回一个 promise                        | `(callback?: FormValidateCallback) => Promise<void>` |
| clearValidate | 移除表单的校验结果，可传入prop 属性或者 prop 组成的数组来指定表单项                                         | `(props?: Arrayable<string>) => void`                |
| resetFields   | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果，可传入prop 属性或者 prop 组成的数组来指定表单项 | `(props?: Arrayable<string>) => void`                |

### Form Slots

| 插槽名  | 说明     | 子标签         |
| ------- | -------- | -------------- |
| default | 表单内容 | `ne-form-item` |

### FormItem Props

| 属性名       | 类型                              | 默认值  | 说明                                                                         |
| ------------ | --------------------------------- | ------- | ---------------------------------------------------------------------------- |
| prop         | `string`                          | —       | 表单项 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 |
| label        | `string`                          | —       | 标签文本                                                                     |
| rules        | `FormItemRules`                   | —       | 表单验证规则                                                                 |
| for          | `string`                          | —       | 原生 for 属性                                                                |
| required     | `boolean`                         | `false` | 是否为必填项，如不设置，则会根据校验规则自动生成                             |
| size         | `'small' \| 'default' \| 'large'` | —       | 用于控制该表单项下组件的尺寸                                                 |
| show-message | `boolean`                         | `true`  | 是否显示校验错误信息                                                         |

### FormItem Exposes

| 名称            | 说明                                                 | 类型                                     |
| --------------- | ---------------------------------------------------- | ---------------------------------------- |
| validateMessage | 校验错误信息                                         | `string`                                 |
| validateStatus  | 校验状态                                             | `string`                                 |
| validate        | 对该表单项进行校验                                   | `(trigger?: string) => Promise<boolean>` |
| clearValidate   | 移除该表单项的校验结果                               | `() => void`                             |
| resetField      | 对该表单项进行重置，将其值重置为初始值并移除校验结果 | `() => void`                             |

### FormItem Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 表单项内容     |
| label   | 标签文本的内容 |

## 校验规则

Form 组件使用 [async-validator](https://github.com/yiminghe/async-validator) 来进行表单校验。

## 类型定义

```typescript
export type Arrayable<T> = T | T[];

// 表单项规则类型
export interface FormItemRules extends RuleItem {
  trigger?: Arrayable<string>;
}

// 表单规则类型
export type FormRules = Record<string, Arrayable<FormItemRules>>;

// 表单校验回调函数类型
export type FormValidateCallback = (
  isValid: boolean,
  invalidFields?: ValidateFieldsError,
) => void;
```
