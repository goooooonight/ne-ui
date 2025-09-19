<script setup lang="ts">
import { Like, LocalTwo, Mail } from '@icon-park/vue-next'
</script>

<template>
  <div class="icons-group">
    <ne-icon size="30"><Like /></ne-icon>
    <ne-icon size="20"><LocalTwo /></ne-icon>
    <ne-icon size="10"><Mail /></ne-icon>
  </div>
</template>

<style scoped>
.icons-group {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
