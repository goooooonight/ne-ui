# Upload 上传

## 基础用法

使用 `Upload` 上传组件来上传文件，通过 `slot` 定制你的上传组件内容。

<demo vue="upload/Basic.vue" />

## 限制上传文件数

设置 `limit` 属性限制上传文件的数量。

<demo vue="upload/Limit.vue" />

## 拖拽上传

通过使用 `drag` 属性开启拖拽上传功能。

<demo vue="upload/Drag.vue" />

## 文件列表展示

通过 `v-model:file-list` 双向绑定文件列表，展示上传的文件。

<demo vue="upload/FileList.vue" />

## 限制上传文件

通过设置 `onBeforeUpload` 文件上传前钩子函数对上传文件进行限制。

<demo vue="upload/BeforeUpload.vue" />

## API

### Props

| 属性名           | 类型                                                                                                 | 默认值  | 说明                   |
| ---------------- | ---------------------------------------------------------------------------------------------------- | ------- | ---------------------- |
| fileList         | `UploadUserFile[]`                                                                                   | `[]`    | 上传文件列表           |
| action           | `string`                                                                                             | `#`     | 上传请求的 URL         |
| name             | `string`                                                                                             | `file`  | 上传文件的字段名       |
| method           | `string`                                                                                             | `POST`  | 上传请求的 HTTP 方法   |
| headers          | `Headers \| Record<string, string>`                                                                  | —       | 上传请求的头部信息     |
| data             | `Record<string, unknown>`                                                                            | —       | 上传请求的额外参数     |
| multiple         | `boolean`                                                                                            | `false` | 是否支持多选文件       |
| drag             | `boolean`                                                                                            | `false` | 是否启用拖拽上传       |
| limit            | `number`                                                                                             | —       | 限制上传文件的数量     |
| disabled         | `boolean`                                                                                            | `false` | 是否禁用上传功能       |
| showFileList     | `boolean`                                                                                            | `true`  | 是否显示文件列表       |
| on-before-upload | `(uploadFile: UploadFile, uploadFiles: UploadFiles) => Promise<boolean \| void> \| boolean \| void ` | —       | 文件上传前的钩子       |
| on-success       | `(response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                          | —       | 文件上传成功的钩子     |
| on-error         | `(error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                           | —       | 文件上传失败的钩子     |
| on-progress      | `(event: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`             | —       | 文件上传进度更新的钩子 |
| on-change        | `(uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                         | —       | 文件状态改变的钩子     |
| on-remove        | `(uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                         | —       | 文件删除的钩子         |

### Slots

| 插槽名  | 说明                 |
| ------- | -------------------- |
| default | 自定义上传内容 |
