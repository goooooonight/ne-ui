<script setup lang="ts">
import { HourglassFull, Loading, LoadingTwo } from '@icon-park/vue-next'
</script>

<template>
  <div class="example">
    <ne-loading>
      <template #icon>
        <ne-icon :icon="HourglassFull" size="30" color="#1f56fb"></ne-icon>
      </template>
    </ne-loading>
    <ne-loading>
      <template #icon>
        <ne-icon :icon="Loading" size="30" color="#1f56fb"></ne-icon>
      </template>
    </ne-loading>
    <ne-loading>
      <template #icon>
        <ne-icon :icon="LoadingTwo" size="30" color="#1f56fb"></ne-icon>
      </template>
    </ne-loading>
  </div>
</template>

<style scoped>
.example {
  display: flex;
  gap: 16px;
}
</style>
