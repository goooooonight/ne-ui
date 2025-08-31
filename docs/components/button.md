# 按钮

## 基础用法
使用 `type` 来定义按钮的样式。

<ne-button>default</ne-button>
<ne-button type="success">success</ne-button>
<ne-button type="primary">primary</ne-button>
<ne-button type="warning">warning</ne-button>
<ne-button type="danger">danger</ne-button>
<ne-button type="info">info</ne-button>

```vue
<ne-button>default</ne-button>
<ne-button type="success">success</ne-button>
<ne-button type="primary">primary</ne-button>
<ne-button type="warning">warning</ne-button>
<ne-button type="danger">danger</ne-button>
<ne-button type="info">info</ne-button>
```

## 禁用按钮
使用 `disabled` 来禁用按钮，同时按钮样式也会改变

<ne-button disabled>default</ne-button>
<ne-button type="success" disabled>success</ne-button>
<ne-button type="primary" disabled>primary</ne-button>
<ne-button type="warning" disabled>warning</ne-button>
<ne-button type="danger" disabled>danger</ne-button>
<ne-button type="info" disabled>info</ne-button>

```vue
<ne-button disabled>default</ne-button>
<ne-button type="success" disabled>success</ne-button>
<ne-button type="primary" disabled>primary</ne-button>
<ne-button type="warning" disabled>warning</ne-button>
<ne-button type="danger" disabled>danger</ne-button>
<ne-button type="info" disabled>info</ne-button>
```

## 按钮尺寸
通过设置 `size` 为 `large`、`default`、`small` 分别把按钮设为大、中、小尺寸，默认尺寸为 `default`

<div class="button-example">
  <div>
    <ne-button size="small">small</ne-button>
    <ne-button size="default">default</ne-button>
    <ne-button size="large">large</ne-button>
  </div>
  <div>
    <ne-button size="small" round>small</ne-button>
    <ne-button size="default" round>default</ne-button>
    <ne-button size="large" round>large</ne-button>
  </div>
  <div>
    <ne-button size="small" circle :icon="IpAirpods"></ne-button>
    <ne-button size="default" circle :icon="IpAirpods"></ne-button>
    <ne-button size="large" circle :icon="IpAirpods"></ne-button>
  </div>
</div>

<style scoped>
.button-example {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>

```vue
<div class="button-example">
  <div>
    <ne-button size="small">small</ne-button>
    <ne-button size="default">default</ne-button>
    <ne-button size="large">large</ne-button>
  </div>
  <div>
    <ne-button size="small" round>small</ne-button>
    <ne-button size="default" round>default</ne-button>
    <ne-button size="large" round>large</ne-button>
  </div>
  <div>
    <ne-button size="small" circle :icon="IpAirpods"></ne-button>
    <ne-button size="default" circle :icon="IpAirpods"></ne-button>
    <ne-button size="large" circle :icon="IpAirpods"></ne-button>
  </div>
</div>

<style scoped>
.button-example {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
```

## 圆角按钮
使用 `round` 来设置圆角按钮

<ne-button round>default</ne-button>
<ne-button type="success" round>success</ne-button>
<ne-button type="primary" round>primary</ne-button>
<ne-button type="warning" round>warning</ne-button>
<ne-button type="danger" round>danger</ne-button>
<ne-button type="info" round>info</ne-button>

```vue
<ne-button round>default</ne-button>
<ne-button type="success" round>success</ne-button>
<ne-button type="primary" round>primary</ne-button>
<ne-button type="warning" round>warning</ne-button>
<ne-button type="danger" round>danger</ne-button>
<ne-button type="info" round>info</ne-button>
```

## 朴素按钮
使用 `plain` 来设置朴素按钮

<ne-button plain>朴素</ne-button>
<ne-button type="success" plain>success</ne-button>
<ne-button type="primary" plain>primary</ne-button>
<ne-button type="warning" plain>warning</ne-button>
<ne-button type="danger" plain>danger</ne-button>
<ne-button type="info" plain>info</ne-button>

```vue
<ne-button plain>朴素</ne-button>
<ne-button type="success" plain>success</ne-button>
<ne-button type="primary" plain>primary</ne-button>
<ne-button type="warning" plain>warning</ne-button>
<ne-button type="danger" plain>danger</ne-button>
<ne-button type="info" plain>info</ne-button>
```

## 文字按钮
使用 `text` 来设置文字按钮

<ne-button text>default</ne-button>
<ne-button type="success" text>success</ne-button>
<ne-button type="primary" text>primary</ne-button>
<ne-button type="warning" text>warning</ne-button>
<ne-button type="danger" text>danger</ne-button>
<ne-button type="info" text>info</ne-button>

```vue
<ne-button text>default</ne-button>
<ne-button type="success" text>success</ne-button>
<ne-button type="primary" text>primary</ne-button>
<ne-button type="warning" text>warning</ne-button>
<ne-button type="danger" text>danger</ne-button>
<ne-button type="info" text>info</ne-button>
```

## 圆形按钮
使用 `circle` 来设置圆形按钮

<script setup lang="ts">
import { IpAirpods } from 'vue-icons-plus/ip'
</script>

<ne-button circle :icon="IpAirpods"></ne-button>
<ne-button type="success" circle :icon="IpAirpods"></ne-button>
<ne-button type="primary" circle :icon="IpAirpods"></ne-button>
<ne-button type="warning" circle :icon="IpAirpods"></ne-button>
<ne-button type="danger" circle :icon="IpAirpods"></ne-button>
<ne-button type="info" circle :icon="IpAirpods"></ne-button>

```vue
<ne-button circle :icon="IpAirpods"></ne-button>
<ne-button type="success" circle :icon="IpAirpods"></ne-button>
<ne-button type="primary" circle :icon="IpAirpods"></ne-button>
<ne-button type="warning" circle :icon="IpAirpods"></ne-button>
<ne-button type="danger" circle :icon="IpAirpods"></ne-button>
<ne-button type="info" circle :icon="IpAirpods"></ne-button>
```

## 图标位置
通过设置 `icon-placement` 为 `left`、`right` 来控制图标组件在按钮中的位置

<ne-button type="primary" :icon="IpAirpods" icon-placement="left" round
>Airpods</ne-button
>
<ne-button type="primary" :icon="IpAirpods" icon-placement="right" round
>Airpods</ne-button
>

```vue
<ne-button type="primary" :icon="IpAirpods" icon-placement="left" round
>Airpods</ne-button>
<ne-button type="primary" :icon="IpAirpods" icon-placement="right" round
>Airpods</ne-button>
```

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
