<script setup lang="ts">
import { Agreement, WeixinMiniApp, ZoomIn } from '@icon-park/vue-next'
</script>

<template>
  <div class="icons-group">
    <ne-icon><Agreement /></ne-icon>
    <ne-icon><WeixinMiniApp /></ne-icon>
    <ne-icon><ZoomIn /></ne-icon>
  </div>
</template>

<style scoped>
.icons-group {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
