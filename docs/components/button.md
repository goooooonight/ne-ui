# 按钮

## 基础用法
使用 `type` 来定义按钮的样式。

<demo vue="../example/button/basic.vue" />

## 禁用按钮
使用 `disabled` 来禁用按钮，同时按钮样式也会改变

<demo vue="../example/button/disabled.vue" />

## 按钮尺寸
通过设置 `size` 为 `large`、`default`、`small` 分别把按钮设为大、中、小尺寸，默认尺寸为 `default`

<demo vue="../example/button/Size.vue" />

## 圆角按钮
使用 `round` 来设置圆角按钮

<demo vue="../example/button/Round.vue" />

## 朴素按钮
使用 `plain` 来设置朴素按钮

<demo vue="../example/button/Plain.vue" />

## 文字按钮
使用 `text` 来设置文字按钮

<demo vue="../example/button/Text.vue" />

## 圆形按钮
使用 `circle` 来设置圆形按钮

<demo vue="../example/button/Circle.vue" />


## 图标位置
通过设置 `icon-placement` 为 `left`、`right` 来控制图标组件在按钮中的位置

<demo vue="../example/button/IconPlacement.vue" />

## API

### Icon Props

| 属性名 | 类型                 | 默认值    | 说明     |
| ------ | -------------------- | --------- | -------- |
| type  | `string`             | default | 按钮类型 |
| size   | `string`  | default | 按钮尺寸 |
| round   | `boolean`  | false | 是否为圆角按钮 |
| plain   | `boolean`  | false | 是否为朴素按钮 |
| text   | `boolean`  | false | 是否为文字按钮 |
| circle   | `boolean`  | false | 是否为圆形按钮 |
| disabled   | `boolean`  | false | 按钮是否禁用 |
| native-type   | `string`  | button | 按钮原生类型 |
| icon   | `object`  | — | 图标组件 |
| icon-placement   | `string`  | left | 图标组件位置 |

### Events

| 事件名 | 说明           | 参数                  |
| ------ | -------------- | --------------------- |
| click  | 点击按钮时触发 | `MouseEvent` 事件对象 |
