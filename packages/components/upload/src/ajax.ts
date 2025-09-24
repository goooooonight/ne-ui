import type { UploadOptions, UploadProgressEvent } from './type'

// 生成 UploadProgressEvent
const genUploadProgressEvent = (
  event: ProgressEvent,
  percent: number
): UploadProgressEvent => {
  const progressEvent = event as UploadProgressEvent
  progressEvent.percent = percent
  return progressEvent
}

export function ajaxUpload(options: UploadOptions): void {
  // 解构options
  const {
    action,
    file,
    name,
    method,
    headers,
    data,
    onSuccess,
    onError,
    onProgress
  } = options

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

  // 保存最后一次进度事件，用于构建100%进度事件
  let lastProgressEvent: ProgressEvent

  // 监听上传进度
  xhr.upload.onprogress = (event) => {
    // 保存最后一次进度事件
    lastProgressEvent = event

    // 限制进度最大值为95%，为服务器处理预留5%
    const progressEvent = genUploadProgressEvent(
      event,
      Math.min(95, Math.floor((event.loaded / event.total) * 100))
    )

    onProgress(progressEvent)
  }

  // 处理响应
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      // 上传成功时，将进度设置为100%
      // 基于最后一次进度事件构建完整的100%进度事件
      const progressEvent = genUploadProgressEvent(lastProgressEvent, 100)
      onProgress(progressEvent)

      // 调用成功回调
      if (onSuccess) {
        onSuccess(xhr.response)
      }
    } else {
      // 上传失败
      if (onError) {
        const error = new Error(`HTTP Error: ${xhr.status} ${xhr.statusText}`)
        onError(error)
      }
    }
  }

  // 处理网络错误
  xhr.addEventListener('error', (event) => {
    if (onError) {
      const error = new Error(`Network Error: ${event.type}`)
      onError(error)
    }
  })

  // 发送请求
  xhr.send(formData)
}
