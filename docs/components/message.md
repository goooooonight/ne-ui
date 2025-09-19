# Message 消息

## 基础用法

`Message` 组件提供了一种轻量级的消息提示方式，常用于操作反馈、状态提示等场景。你可以通过函数式调用来快速显示消息。

<demo vue="message/Basic.vue" />

## 五种状态

`Message` 提供五种不同的状态类型，通过设置 `type` 选择你想要的状态。

<demo vue="message/Type.vue" />

## 设置持续时间

通过设置 `duration` 属性来控制 `Message` 的持续时间，单位为ms。  
当 `duration` 被设置为0时，消息不会自动关闭。

<demo vue="message/Duration.vue" />

## 可关闭

使用 `closable` 属性获得一个可手动关闭的 `Message`。

<demo vue="message/Closable.vue" />

## 自定义类名

`Message` 提供 `custom-class` 来帮助你自定义类名。

<demo vue="message/CustomClass.vue" />

## API

### Message 配置项

| 属性名       | 类型      | 默认值  | 说明                                        |
| ------------ | --------- | ------- | ------------------------------------------- |
| message      | `string`  | —       | 消息内容                                    |
| type         | `string`  | primary | 消息状态类型                                |
| duration     | `number`  | 3000    | 持续时间，单位为毫秒。设为 0 则不会自动关闭 |
| closable     | `boolean` | false   | 是否可以手动关闭消息                        |
| customClass | `string`  | —       | 消息自定义类名                              |
