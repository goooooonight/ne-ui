<script setup lang="ts">
import { ref } from 'vue'
import { createNameSpace } from '@ne-ui/utils'
import { uploadContentProps } from './upload-content'
import type { UploadFile } from './type'

// 创建命名空间
const ns = createNameSpace('upload')

// 获取props
const props = defineProps(uploadContentProps)

// 绑定原生input ref
const inputRef = ref<HTMLInputElement>()

// 处理上传点击事件
const handleClick = () => {
  inputRef.value?.click()
}

// 处理上传文件改变事件
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files
  // 将files转化为数组 进行遍历操作
  if (files) {
    Array.from(files).forEach((file) => {
      const rawFile: UploadFile = {
        uid: 1,
        name: file.name,
        size: file.size,
        raw: file,
        status: 'success'
      }
      props.onStart!(rawFile)
    })
  }
}
</script>

<template>
  <div :class="ns.b()" @click="handleClick">
    <slot></slot>
    <input
      type="file"
      ref="inputRef"
      :class="ns.e('input')"
      :multiple="multiple"
      @change="handleChange"
    />
  </div>
</template>

<style scoped></style>
