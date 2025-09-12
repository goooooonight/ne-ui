# 输入框

## 基础用法

<demo vue="input/Basic.vue" />


## 文本域
通过设置 `type` 为 `textarea` 将输入框设置为文本域，用于多行输入。

<demo vue="input/Textarea.vue" />

## 三种尺寸
通过设置 `size` 为 `small`、`default`、`large` 分别把输入框设置为小、中、大三种尺寸，默认为 `default` 。

<demo vue="input/Size.vue" />

## 复合输入框
使用 `prepend`、 `append` 插槽定制你的复合输入框。

<demo vue="input/Group.vue" />

## 禁用状态
通过设置 `disabled` 属性使输入框处于禁用状态。

<demo vue="input/Disabled.vue" />

## 输入字数限制
使用 `minlength` 和 `maxlength` 属性来限制输入框的最小、最大输入字数，同时使用 `show-word-limit` 可以显示统计字数和字数限制。

<demo vue="input/WordLimit.vue" />

## 密码输入框
使用 `show-password` 属性获得一个可以显示 / 隐藏密码的输入框。

<demo vue="input/ShowPassword.vue" />

## 一键清除
使用 `clearable` 属性获得一个可以一键清除输入内容的输入框，点击清除图标删除所有输入内容。

<demo vue="input/Clearable.vue" />

## API

### Props

| 属性名                | 类型                 | 默认值   | 说明                  |
| --------------------- | -------------------- | -------- | --------------------- |
| model-value / v-model | `string` \| `number` | —        | 输入框绑定值          |
| size                  | `string`             | default  | 尺寸                  |
| type                  | `string`             | text     | 类型                  |
| show-password         | `boolean`            | false    | 是否为密码框          |
| placeholder           | `string`             | —        | 占位内容              |
| disabled              | `boolean`            | false    | 是否处于禁用状态      |
| clearable             | `boolean`            | false    | 是否显示一键清除图标  |
| rows                  | `number`             | 3        | textarea 行数         |
| cols                  | `number`             | —        | textarea 列数         |
| resize                | `string`             | vertical | textarea 调整大小方式 |
| minlength             | `string` \| `number` | —        | 最小输入长度          |
| maxlength             | `string` \| `number` | —        | 最大输入长度          |
| show-word-limit       | `boolean`            | false    | 显示字数限制          |

:::tip
Input 组件的其他属性与原生 HTML `<input>` 元素保持一致。
:::

### Events

| 事件名 | 说明           | 参数                        |
| ------ | -------------- | --------------------------- |
| input  | 用户输入时触发 | `(value: string \| number)` |
| focus  | 获取焦点时触发 | `(event: FocusEvent)`       |
| blur   | 失去焦点时触发 | `(event: FocusEvent)`       |

### Slots

| 插槽名  | 说明                           |
| ------- | ------------------------------ |
| prepend | 输入框前置内容，用于复合输入框 |
| append  | 输入框后置内容，用于复合输入框 |
