<script setup lang="ts">
import { IpAgreement, IpWeixinMiniApp, IpZoomIn } from 'vue-icons-plus/ip'
</script>

<template>
  <div class="icons-group">
    <ne-icon><IpAgreement /></ne-icon>
    <ne-icon><IpWeixinMiniApp /></ne-icon>
    <ne-icon><IpZoomIn /></ne-icon>
  </div>
</template>

<style scoped>
.icons-group {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
