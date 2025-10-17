<script setup lang="ts">
import { ref } from 'vue'

const isVisible = ref(false)
</script>

<template>
  <ne-loading :visible="isVisible" style="margin-bottom: 10px">
    <ne-card style="width: 500px">
      <template #header>Lyricify</template>
      <div style="font-style: italic">
        <p>Two-thirty baby won't you meet me by The Bean</p>
        <p>Too early maybe later you can show me things</p>
      </div>
    </ne-card>
  </ne-loading>
  <ne-button type="primary" plain @click="isVisible = !isVisible"
    >切换加载状态</ne-button
  >
</template>
