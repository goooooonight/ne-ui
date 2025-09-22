import type { UploadOptions } from './type'

export function ajaxUpload(options: UploadOptions): void {
  // 解构options
  const { action, file, name, method, headers, data, onSuccess, onError } =
    options

  // 创建XMLHttpRequest
  const xhr = new XMLHttpRequest()

  // 设置请求头
  if (headers) {
    for (const [key, value] of Object.entries(headers)) {
      xhr.setRequestHeader(key, value as string)
    }
  }

  // 设置携带参数
  const formData = new FormData()
  if (data) {
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value as string)
    }
  }
  formData.append(name, file)

  // 配置请求
  xhr.open(method.toUpperCase(), action, true)

  // 处理响应
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      // 上传成功
      if (onSuccess) {
        onSuccess('success')
      }
    } else {
      // 上传失败
      if (onError) {
        onError(`error`)
      }
    }
  }

  // 处理网络错误
  xhr.addEventListener('error', (event) => {
    if (onError) {
      onError(event)
    }
  })

  // 发送请求
  xhr.send(formData)
}
