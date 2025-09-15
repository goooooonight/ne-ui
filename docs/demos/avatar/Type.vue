<script setup lang="ts">
import { IpWoman } from 'vue-icons-plus/ip'
</script>

<template>
  <div class="example-type">
    <ne-avatar>Kris</ne-avatar>
    <ne-avatar :icon="IpWoman"></ne-avatar>
    <ne-avatar
      src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Avery"
    ></ne-avatar>
  </div>
</template>

<style scoped>
.example-type {
  display: flex;
  gap: 14px;
}
</style>
