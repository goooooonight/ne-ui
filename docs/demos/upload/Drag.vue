<script lang="ts" setup>
import { UploadTwo } from '@icon-park/vue-next'
</script>

<template>
  <ne-upload
    action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    multiple
    drag
  >
    <ne-icon :icon="UploadTwo" class="upload-icon"></ne-icon>
    <span class="upload-span"> 点击或者拖动文件到该区域来上传 </span>
  </ne-upload>
</template>

<style scoped>
.upload-icon {
  margin-bottom: 6px;
  font-size: 48px;
  color: #a8abb2;
}
.upload-span {
  display: block;
  font-size: 13px;
  font-style: italic;
  color: #a8abb2;
}
</style>
