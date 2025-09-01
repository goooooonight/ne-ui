<script setup lang="ts">
import { IpAgreement, IpWeixinMiniApp, IpZoomIn } from 'vue-icons-plus/ip'
</script>

<template>
  <div class="icons-group">
    <ne-icon color="#e74032"><IpAgreement /></ne-icon>
    <ne-icon color="#fbc015"><IpWeixinMiniApp /></ne-icon>
    <ne-icon color="#239442"><IpZoomIn /></ne-icon>
  </div>
</template>

<style scoped>
.icons-group {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
