<script setup lang="ts">
import { IpLike, IpLocalTwo, IpMail } from 'vue-icons-plus/ip'
</script>

<template>
  <div class="icons-group">
    <ne-icon size="30"><IpLike /></ne-icon>
    <ne-icon size="20"><IpLocalTwo /></ne-icon>
    <ne-icon size="10"><IpMail /></ne-icon>
  </div>
</template>

<style scoped>
.icons-group {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
