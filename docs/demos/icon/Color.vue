<script setup lang="ts">
import { Agreement, WeixinMiniApp, ZoomIn } from '@icon-park/vue-next'
</script>

<template>
  <div class="icons-group">
    <ne-icon color="#e74032"><Agreement /></ne-icon>
    <ne-icon color="#fbc015"><WeixinMiniApp /></ne-icon>
    <ne-icon color="#239442"><ZoomIn /></ne-icon>
  </div>
</template>

<style scoped>
.icons-group {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
