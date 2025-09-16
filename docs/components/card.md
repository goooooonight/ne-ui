# Card 卡片

## 基础用法

`Card` 包含标题、内容、页脚，通过设置对应的插槽定制你的卡片。

<demo vue="card/Basic.vue" />

## 无边框卡片

通过设置 `bordered` 属性为 false 得到一个无边框的卡片。

<demo vue="card/Bordered.vue" />

## 阴影显示时机

通过设置 `shadow` 属性来控制 `Card` 阴影的显示时机，默认为 `never` 。

<demo vue="card/Shadow.vue" />

## 自定义类名

`Card` 提供 `header-class` 、 `body-class` 、 `footer-class` 来帮助你自定义类名。

<demo vue="card/CustomClass.vue" />

## Card API

### Card Props

| 属性名       | 类型      | 默认值 | 说明                |
| ------------ | --------- | ------ | ------------------- |
| header       | `string`  | —      | 卡片标题            |
| footer       | `string`  | —      | 卡片页脚            |
| shadow       | `string`  | never  | 阴影显示时机        |
| header-class | `string`  | —      | header 的自定义类名 |
| body-class   | `string`  | —      | body 的自定义类名   |
| footer-class | `string`  | —      | footer 的自定义类名 |
| bordered     | `boolean` | true   | 是否显示卡片边框    |

### Card Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义展示内容 |
| header  | 卡片标题内容   |
| footer  | 卡片页脚内容   |
