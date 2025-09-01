<script setup lang="ts">
import { IpVolumeDown, IpVolumeUp, IpVolumeMute } from 'vue-icons-plus/ip'
</script>

<template>
  <div class="icons-group">
    <ne-icon :icon="IpVolumeDown"></ne-icon>
    <ne-icon :icon="IpVolumeUp"></ne-icon>
    <ne-icon :icon="IpVolumeMute"></ne-icon>
  </div>
</template>

<style scoped>
.icons-group {
  display: flex;
  gap: 5px;
}
</style>
