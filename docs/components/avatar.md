# Avatar 头像

## 基础用法

通过设置 `shape` 有两种形状的头像可选，默认为圆形头像。

<demo vue="avatar/Basic.vue" />

## 更改大小

通过设置 `size` 属性控制头像的大、中、小三种尺寸。  
也可以输入数字自定义头像的尺寸，单位为px。

<demo vue="avatar/Size.vue" />

## 头像类型

头像内容支持三种类型：图片、Icon 以及字符。

<demo vue="avatar/Type.vue" />

## 适应容器

当Avatar显示图片时，可以通过 `fit` 属性控制图片在容器中的适应方式，类似于CSS的 `object-fit` 属性。

<demo vue="avatar/Fit.vue" />

## 头像组合

使用 `ne-avatar-group` 包裹数个 `avatar` 得到一组头像。

<demo vue="avatar/Group.vue" />

## Avatar API

### Avatar Props

| 属性名 | 类型                 | 默认值  | 说明                 |
| ------ | -------------------- | ------- | -------------------- |
| shape  | `string`             | circle  | 头像形状             |
| size   | `string` \| `number` | default | 头像尺寸             |
| icon   | `object`             | —       | 头像图标             |
| src    | `string`             | —       | 头像图片地址         |
| fit    | `string`             | cover   | 头像图片适应容器类型 |
| alt    | `string`             | —       | 图片原生 alt 属性    |
| srcset | `string`             | —       | 图片原生 srcset 属性 |

### Avatar Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义头像展示内容 |

## AvatarGroup API

### AvatarGroup Props

| 属性名 | 类型                 | 默认值  | 说明     |
| ------ | -------------------- | ------- | -------- |
| shape  | `string`             | circle  | 头像形状 |
| size   | `string` \| `number` | default | 头像尺寸 |

### AvatarGroup Slots

| 插槽名  | 说明           | 子标签      |
| ------- | -------------- | ----------- |
| default | 自定义默认内容 | `ne-avatar` |
