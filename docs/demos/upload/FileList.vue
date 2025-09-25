<script setup lang="ts">
import { Upload } from '@icon-park/vue-next'
import { ref } from 'vue'

const fileList = ref([
  {
    name: 'NeUI文档.md',
    status: 'uploading'
  },
  {
    name: '你的短信',
    status: 'error'
  },
  {
    name: '壁纸',
    status: 'success'
  }
])
</script>

<template>
  <ne-upload
    v-model:file-list="fileList"
    action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    multiple
  >
    <ne-button plain type="primary" :icon="Upload">FileList</ne-button>
  </ne-upload>
</template>
