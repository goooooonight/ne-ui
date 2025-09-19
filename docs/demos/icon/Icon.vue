<script setup lang="ts">
import { VolumeDown, VolumeUp, VolumeMute } from '@icon-park/vue-next'
</script>

<template>
  <div class="icons-group">
    <ne-icon :icon="VolumeDown"></ne-icon>
    <ne-icon :icon="VolumeUp"></ne-icon>
    <ne-icon :icon="VolumeMute"></ne-icon>
  </div>
</template>

<style scoped>
.icons-group {
  display: flex;
  gap: 5px;
}
</style>
