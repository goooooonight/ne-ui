# Loading 加载

## 基础用法

一个简单的 `Loading` 状态。

<demo vue="loading/Basic.vue" />

## 填充内容

使用默认插槽把其他内容包裹在 `Loading` 中。

<demo vue="loading/Content.vue" />

## 文字信息

使用 `text` 插槽或设置 `text` 属性来设置加载信息。

<demo vue="loading/Text.vue" />


## 延迟加载

你可以设置一个显示延迟时间。在延迟时间到达前结束，`Loading` 将不会显示。

<demo vue="loading/Delay.vue" />

## 自定义加载图标

使用 `icon` 插槽来使用自定义加载图标。

<demo vue="loading/Icon.vue" />

## API

### Props

| 属性名     | 类型      | 默认值 | 说明                   |
| ---------- | --------- | ------ | ---------------------- |
| visible    | `boolean` | true   | 是否显示加载动画       |
| text       | `string`  | —      | 加载文本               |
| background | `string`  | —      | 遮罩背景色             |
| delay      | `number`  | —      | 延迟显示加载的时间(ms) |

### Slots

| 插槽名 | 说明         |
| ------ | ------------ |
| default      | 被包裹的内容 |
| icon   | 自定义图标   |
| text   | 自定义文本   |
