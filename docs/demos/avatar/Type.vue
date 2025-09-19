<script setup lang="ts">
import { Woman } from '@icon-park/vue-next'
</script>

<template>
  <div class="example-type">
    <ne-avatar>Kris</ne-avatar>
    <ne-avatar :icon="Woman"></ne-avatar>
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
