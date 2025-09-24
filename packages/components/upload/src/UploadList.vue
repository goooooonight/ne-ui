<script setup lang="ts">
import {
  Delete,
  FileConversion,
  FileFailed,
  FileSuccess
} from '@icon-park/vue-next'
import { uploadListProps, uploadListEmits } from './upload-list'
import { createNameSpace } from '@ne-ui/utils'
import type { UploadFile } from './type'

// 创建命名空间
const ns = createNameSpace('upload-list')

// 获取 props 和 emits
defineProps(uploadListProps)
const emits = defineEmits(uploadListEmits)

// 处理删除事件
const handleRemove = (file: UploadFile) => {
  emits('remove', file)
}
</script>

<template>
  <ul :class="ns.b()">
    <li
      v-for="file in files"
      :key="file.uid"
      :class="[ns.e('item'), ns.m(file.status)]"
    >
      <div :class="ns.e('item-info')">
        <ne-icon v-if="file.status === 'success'" :icon="FileSuccess"></ne-icon>
        <ne-icon
          v-else-if="file.status === 'error'"
          :icon="FileFailed"
        ></ne-icon>
        <ne-icon v-else :icon="FileConversion"></ne-icon>

        <div :class="ns.e('item-file-name')">
          <span>{{ file.name }}</span>
          <div
            v-show="
              (file.status === 'uploading' || file.status === 'start') &&
              file.percent !== 100
            "
            :class="ns.e('item-progress')"
          >
            <div
              :class="ns.e('item-progress-content')"
              :style="{ width: `${file.percent}%` }"
            ></div>
          </div>
        </div>
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
