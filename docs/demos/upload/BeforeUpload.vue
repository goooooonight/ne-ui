<script setup lang="ts">
import { Upload } from '@icon-park/vue-next'
import { NeMessage } from '@ne-ui/components'
import { UploadFile, UploadFiles } from '@ne-ui/components/upload/src/type'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const beforeUpload = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  const sizeLimit = 2 * 1024 * 1024
  if (uploadFile.size && uploadFile.size >= sizeLimit) {
    NeMessage.error('上传文件大小不得超过 2MB ')
    return false
  }
  return true
}
</script>

<template>
  <ne-upload
    action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    multiple
    :onBeforeUpload="beforeUpload"
  >
    <ne-button plain type="primary" :icon="Upload"
      >Upload (2MB Limit)</ne-button
    >
  </ne-upload>
</template>
