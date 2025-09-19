# Icon 图标

## 使用图标

ne-ui 推荐使用 `@icon-park/vue-next` 作为图标库。

```bash
$ yarn add @icon-park/vue-next
# or
$ pnpm install @icon-park/vue-next --save
```

## 基础用法

<demo vue="icon/Basic.vue" />

## 更改颜色

通过设置 `color` 属性控制图标的颜色。

<demo vue="icon/Color.vue" />

## 更改大小

通过设置 `size` 属性控制图标的尺寸。

<demo vue="icon/Size.vue" />

## icon属性

通过 `icon` 属性可以直接传入对应的 `icon` 组件。

<demo vue="icon/Icon.vue" />

## API

### Props

| 属性名 | 类型                 | 默认值 | 说明     |
| ------ | -------------------- | ------ | -------- |
| color  | `string`             | —      | 图标颜色 |
| size   | `string` \| `number` | —      | 图标大小 |
| icon   | `object`             | —      | 图标组件 |
