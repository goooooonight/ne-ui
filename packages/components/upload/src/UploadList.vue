<script setup lang="ts">
import { FileSuccess } from '@icon-park/vue-next'
import { uploadListProps } from './upload-list'
import { createNameSpace } from '@ne-ui/utils'

// 创建命名空间
const ns = createNameSpace('upload-list')

// 获取props
defineProps(uploadListProps)
</script>

<template>
  <ul :class="ns.b()">
    <li v-for="file in files" :key="file.uid" :class="ns.e('item')">
      <ne-icon :icon="FileSuccess"></ne-icon>
      {{ file.name }}
    </li>
  </ul>
</template>

<style scoped></style>
