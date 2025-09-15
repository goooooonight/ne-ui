<script setup lang="ts">
import { IpUser } from 'vue-icons-plus/ip'
</script>

<template>
  <div class="example-basic">
    <ne-avatar :icon="IpUser"></ne-avatar>
    <ne-avatar :icon="IpUser" shape="square"></ne-avatar>
  </div>
</template>

<style scoped>
.example-basic {
  display: flex;
  gap: 8px;
}
</style>
