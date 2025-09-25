<script setup lang="ts">
import { computed, ref } from 'vue'
import UploadContent from './UploadContent.vue'
import UploadList from './UploadList.vue'
import { generateFileUid, uploadProps, uploadEmits } from './upload'
import type { UploadFile, UploadFiles, UploadProgressEvent } from './type'

// 组件命名
defineOptions({ name: 'ne-upload' })

// 获取 props 和 emits
const props = defineProps(uploadProps)
const emits = defineEmits(uploadEmits)

// 上传文件数组 并规范化为 UploadFiles 类型
props.fileList.forEach((file) => {
  file.uid ||= generateFileUid()
  file.status ||= 'success'
})
const uploadFiles = ref<UploadFiles>(props.fileList as UploadFiles)

// 设置文件状态
const setStatus = (uploadFile: UploadFile, status: string) => {
  const index = uploadFiles.value.findIndex(
    (file) => file.uid === uploadFile.uid
  )
  uploadFiles.value[index].status = status
  return index
}

// 处理上传开始事件
const handleStart = (uploadFile: UploadFile) => {
  uploadFiles.value = [...uploadFiles.value, uploadFile]
}

// 处理删除事件
const handleRemove = (uploadFile: UploadFile) => {
  // 删除文件列表中对应的文件
  const index = uploadFiles.value.indexOf(uploadFile)
  const removeFile = uploadFiles.value.splice(index, 1)[0]
  props.onRemove(removeFile, uploadFiles.value)
}

// 处理上传成功事件
const handleSuccess = (response: any, uploadFile: UploadFile) => {
  // 更新文件状态为成功
  setStatus(uploadFile, 'success')

  // 调用用户传入的成功回调
  props.onSuccess(response, uploadFile, uploadFiles.value)

  // 更新 v-model 绑定的 fileList
  emits('update:fileList', uploadFiles.value)
}

// 处理上传失败事件
const handleError = (error: Error, uploadFile: UploadFile) => {
  // 更新文件状态为失败
  setStatus(uploadFile, 'error')

  // 调用用户传入的失败回调
  props.onError(error, uploadFile, uploadFiles.value)
}

// 处理上传事件
const handleProgress = (event: UploadProgressEvent, uploadFile: UploadFile) => {
  // 更新文件状态为上传中
  const index = setStatus(uploadFile, 'uploading')

  // 设置文件进度
  uploadFiles.value[index].percent = event.percent

  console.log(event)

  // 调用用户传入的上传回调
  props.onProgress(event, uploadFile, uploadFiles.value)
}

// 定义upload-content的props
const uploadContentProps = {
  ...props,
  currentFileCount: computed(() => uploadFiles.value.length),
  onStart: handleStart,
  onRemove: handleRemove,
  onSuccess: handleSuccess,
  onError: handleError,
  onProgress: handleProgress
}
</script>

<template>
  <UploadContent v-bind="uploadContentProps">
    <slot></slot>
  </UploadContent>
  <UploadList :files="uploadFiles" @remove="handleRemove"></UploadList>
</template>

<style scoped></style>
