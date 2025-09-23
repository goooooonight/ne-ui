<script setup lang="ts">
import { Delete, FileSuccess } from '@icon-park/vue-next'
import { uploadListProps, uploadListEmits } from './upload-list'
import { createNameSpace } from '@ne-ui/utils'
import type { UploadFile } from './type'

// 创建命名空间
const ns = createNameSpace('upload-list')

// 获取props
defineProps(uploadListProps)
const emits = defineEmits(uploadListEmits)

// 处理删除事件
const handleRemove = (file: UploadFile) => {
  emits('remove', file)
}
</script>

<template>
  <ul :class="ns.b()">
    <li v-for="file in files" :key="file.uid" :class="ns.e('item')">
      <div :class="ns.e('item-info')">
        <ne-icon :icon="FileSuccess"></ne-icon>
        <span :class="ns.e('item-file-name')">{{ file.name }}</span>
      </div>
      <ne-icon
        :icon="Delete"
        :class="ns.e('close')"
        @click="handleRemove(file)"
      ></ne-icon>
    </li>
  </ul>
</template>

<style scoped></style>
