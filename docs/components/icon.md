# Icon 图标

## 使用图标

ne-ui 推荐使用 `vue-icons-plus` 作为图标库

```bash
$ yarn add vue-icons-plus
# or
$ pnpm install vue-icons-plus --save
```

## 基础用法

<script setup lang="ts">
import { IpAgreement, IpWeixinMiniApp, IpZoomIn } from 'vue-icons-plus/ip'
</script>

<ne-icon><IpAgreement /></ne-icon>
<ne-icon><IpWeixinMiniApp /></ne-icon>
<ne-icon><IpZoomIn /></ne-icon>

```vue
<script setup lang="ts">
import { IpAgreement, IpWeixinMiniApp, IpZoomIn } from 'vue-icons-plus/ip'
</script>

<ne-icon><IpAgreement /></ne-icon>
<ne-icon><IpWeixinMiniApp /></ne-icon>
<ne-icon><IpZoomIn /></ne-icon>
```

## 更改颜色
通过设置 `color` 属性控制图标的颜色

<ne-icon color="#e74032"><IpAgreement /></ne-icon>
<ne-icon color="#fbc015"><IpWeixinMiniApp /></ne-icon>
<ne-icon color="#239442"><IpZoomIn /></ne-icon>

```vue
#waiting...
```

## 更改大小
通过设置 `size` 属性控制图标的尺寸

<ne-icon size="10"><IpAgreement /></ne-icon>
<ne-icon size="20"><IpWeixinMiniApp /></ne-icon>
<ne-icon size="30"><IpZoomIn /></ne-icon>

```vue
#waiting...
```

## icon属性
通过 `icon` 属性可以直接传入对应的 `icon` 组件

<ne-icon :icon="IpAgreement"></ne-icon>
<ne-icon :icon="IpWeixinMiniApp"></ne-icon>
<ne-icon :icon="IpZoomIn"></ne-icon>

## API

### Icon Props

| 属性名 | 类型                 | 默认值    | 说明     |
| ------ | -------------------- | --------- | -------- |
| color  | `string`             | — | 图标颜色 |
| size   | `string` \| `number` | — | 图标大小 |
| icon   | `object` | — | 图标组件 |
