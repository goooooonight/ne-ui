<script setup lang="ts">
import { uploadDraggerEmits } from './upload-dragger'
import { createNameSpace } from '@ne-ui/utils'
import { computed, ref } from 'vue'

// 创建命名空间
const ns = createNameSpace('upload-dragger')

// 获取emits
const emits = defineEmits(uploadDraggerEmits)

// 是否进入拖拽区域
const isDrag = ref(false)

// 生成自定义类名
const classCustom = computed(() => {
  return [ns.b(), ns.is('dragover', isDrag.value)]
})

// 处理拖拽事件
const handleDrop = (event: DragEvent) => {
  isDrag.value = false
  // 将拖拽文件提交给父组件
  if (event.dataTransfer && event.dataTransfer.files) {
    emits('dragUpload', Array.from(event.dataTransfer.files))
  }
}
</script>

<template>
  <div
    :class="classCustom"
    @drop.prevent="handleDrop"
    @dragover.prevent="isDrag = true"
    @dragleave.prevent="isDrag = false"
  >
    <slot></slot>
  </div>
</template>

<style scoped></style>
