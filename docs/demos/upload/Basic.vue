<script setup lang="ts">
import { Upload } from '@icon-park/vue-next'
</script>

<template>
  <ne-upload action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f">
    <ne-button plain type="primary" :icon="Upload">Click to upload</ne-button>
  </ne-upload>
</template>
