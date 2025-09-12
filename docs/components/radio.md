# Radio 单选框

## 基础用法

最基础的用法。设置 `v-model` 绑定变量，选中意味着变量的值为相应 Radio `value` 属性的值。

<demo vue="radio/Basic.vue" />

## 单选框组合

使用 `ne-radio-group` 包裹数个 `radio` 得到一个单选框组合。  
为`ne-radio-group` 设置 `v-model` 绑定变量，通过选中对应 `radio` 得到相应 `value` 属性的值。

<demo vue="radio/Group.vue" />

## 更改大小

通过设置 `size` 属性控制单选框的大、中、小三种尺寸。

<demo vue="radio/Size.vue" />

## 禁用状态

通过为 `ne-radio` 或 `ne-radio-group` 设置 `disabled` 属性使其处于禁用状态。

<demo vue="radio/Disabled.vue" />

## 按钮样式

使用 `ne-radio-button` 代替 `ne-radio` 得到按钮样式的单选框，需配合 `ne-radio-group` 使用。

<demo vue="radio/RadioButton.vue" />

## Radio API

### Radio Props

| 属性名                | 类型                              | 默认值 | 说明             |
| --------------------- | --------------------------------- | ------ | ---------------- |
| model-value / v-model | `string` \| `number` \| `boolean` | —      | 单选框绑定值     |
| value                 | `string` \| `number` \| `boolean` | —      | 单选框的值       |
| disabled              | `boolean`                         | false  | 是否处于禁用状态 |
| name                  | `string`                          | —      | 原生 name 属性   |
| label                 | `string`                          | —      | 单选框的文本标签 |
| size                  | `string`                          | —      | 单选框尺寸       |

### Radio Events

| 事件名 | 说明             | 参数                                   |
| ------ | ---------------- | -------------------------------------- |
| change | 绑定值改变时触发 | `(value: string \| number \| boolean)` |

### Radio Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## RadioGroup API

### RadioGroup Props

| 属性名                | 类型                              | 默认值  | 说明             |
| --------------------- | --------------------------------- | ------- | ---------------- |
| model-value / v-model | `string` \| `number` \| `boolean` | —       | 单选框组合绑定值 |
| disabled              | `boolean`                         | false   | 是否处于禁用状态 |
| name                  | `string`                          | —       | 原生 name 属性   |
| size                  | `string`                          | default | 单选框尺寸       |

### RadioGroup Events

| 事件名 | 说明             | 参数                                   |
| ------ | ---------------- | -------------------------------------- |
| change | 绑定值改变时触发 | `(value: string \| number \| boolean)` |

### RadioGroup Slots

| 插槽名  | 说明           | 子标签                          |
| ------- | -------------- | ------------------------------- |
| default | 自定义默认内容 | `ne-radio` \| `ne-radio-button` |

## RadioButton API

### RadioButton Props

| 属性名   | 类型                              | 默认值  | 说明             |
| -------- | --------------------------------- | ------- | ---------------- |
| value    | `string` \| `number` \| `boolean` | —       | 单选框的值       |
| disabled | `boolean`                         | false   | 是否处于禁用状态 |
| name     | `string`                          | —       | 原生 name 属性   |
| label    | `string`                          | default | 单选框的文本标签 |

### RadioButton Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
