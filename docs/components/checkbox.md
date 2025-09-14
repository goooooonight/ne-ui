# Checkbox 多选框

## 基础用法

最基础的用法。设置 `v-model` 绑定变量，选中意味着变量的值为相应 Checkbox `value` 属性的值。

<demo vue="checkbox/Basic.vue" />

## 多选框组合

使用 `ne-checkbox-group` 包裹数个 `checkbox` 得到一个多选框组合。  
为 `ne-checkbox-group` 设置 `v-model` 绑定变量，通过选中对应 `checkbox` 得到相应 `value` 属性的值。

<demo vue="checkbox/Group.vue" />

## 禁用状态

通过为 `ne-checkbox` 或 `ne-checkbox-group` 设置 disabled 属性使其处于禁用状态。

<demo vue="checkbox/Disabled.vue" />

## 更改大小

通过设置 `size` 属性控制多选框的小、中、大三种尺寸。

<demo vue="checkbox/Size.vue" />

## 可选中值的数量限制

通过设置 `min` 和 `max` 属性控制多选框组的最小、最大选中数量。

<demo vue="checkbox/MinAndMax.vue" />

## 中间状态

使用 `indeterminate` 让 `ne-checkbox` 处于中间状态，常用于实现全选效果，仅控制样式。

<demo vue="checkbox/Indet.vue" />

## Checkbox API

### Checkbox Props

| 属性名                | 类型                              | 默认值 | 说明             |
| --------------------- | --------------------------------- | ------ | ---------------- |
| model-value / v-model | `string` \| `number` \| `boolean` | —      | 多选框绑定值     |
| value                 | `string` \| `number` \| `boolean` | —      | 多选框的值       |
| trueValue             | `string` \| `number`              | —      | 选中时的值       |
| falseValue            | `string` \| `number`              | —      | 没有选中时的值   |
| label                 | `string`                          | —      | 多选框的文本标签 |
| disabled              | `boolean`                         | false  | 是否处于禁用状态 |
| indeterminate         | `boolean`                         | false  | 是否处于中间状态 |
| size                  | `string`                          | —      | 多选框尺寸       |
| name                  | `string`                          | —      | 原生 name 属性   |

### Checkbox Events

| 事件名 | 说明             | 参数                                   |
| ------ | ---------------- | -------------------------------------- |
| change | 绑定值改变时触发 | `(value: string \| number \| boolean)` |

### Checkbox Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## CheckboxGroup API

### CheckboxGroup Props

| 属性名                | 类型                     | 默认值  | 说明               |
| --------------------- | ------------------------ | ------- | ------------------ |
| model-value / v-model | `string[]` \| `number[]` | []      | 多选框组合绑定数组 |
| disabled              | `boolean`                | false   | 是否处于禁用状态   |
| min                   | `number`                 | —       | 选中值的最小数量   |
| max                   | `number`                 | —       | 选中值的最大数量   |
| size                  | `string`                 | default | 多选框尺寸         |

### CheckboxGroup Events

| 事件名 | 说明             | 参数                             |
| ------ | ---------------- | -------------------------------- |
| change | 绑定值改变时触发 | `(value: string[] \| number[] )` |

### CheckboxGroup Slots

| 插槽名  | 说明           | 子标签        |
| ------- | -------------- | ------------- |
| default | 自定义默认内容 | `ne-checkbox` |
