<script setup lang="ts">
import { ref } from 'vue'
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

// 定义upload-content的props
const uploadContentProps = {
  ...props,
  onStart: handleStart
}
</script>

<template>
  <UploadContent v-bind="uploadContentProps">
    <slot></slot>
  </UploadContent>
  <UploadList :files="uploadFiles" @remove="handleRemove"></UploadList>
</template>

<style scoped></style>
