<script setup lang="ts">
import { User } from '@icon-park/vue-next'
</script>

<template>
  <div class="example-basic">
    <ne-avatar :icon="User"></ne-avatar>
    <ne-avatar :icon="User" shape="square"></ne-avatar>
  </div>
</template>

<style scoped>
.example-basic {
  display: flex;
  gap: 8px;
}
</style>
