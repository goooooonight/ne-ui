<script setup lang="ts">
import { computed, ref } from 'vue'
import UploadContent from './UploadContent.vue'
import UploadList from './UploadList.vue'
import { uploadProps } from './upload'
import type { UploadFile, UploadFiles } from './type'

// 组件命名
defineOptions({ name: 'ne-upload' })

// 获取props
const props = defineProps(uploadProps)

// 上传文件数组
const uploadFiles = ref<UploadFiles>(props.filesList)

// 处理上传开始事件
const handleStart = (uploadFile: UploadFile) => {
  // const file: UploadFile = uploadFile
  // console.log(file)
  uploadFiles.value = [...uploadFiles.value, uploadFile]
}

// 处理删除事件
const handleRemove = (file: UploadFile) => {
  const index = uploadFiles.value.indexOf(file)
  uploadFiles.value.splice(index, 1)
}

// 处理成功事件
const handleSuccess = (response: any, uploadFile: UploadFile) => {
  // 更新文件状态为成功
  uploadFile.status = 'success'

  // 调用用户传入的成功回调
  props.onSuccess(response, uploadFile, uploadFiles.value)
}

// 定义upload-content的props
const uploadContentProps = {
  ...props,
  currentFileCount: computed(() => uploadFiles.value.length),
  onStart: handleStart,
  onSuccess: handleSuccess
}
</script>

<template>
  <UploadContent v-bind="uploadContentProps">
    <slot></slot>
  </UploadContent>
  <UploadList :files="uploadFiles" @remove="handleRemove"></UploadList>
</template>

<style scoped></style>
