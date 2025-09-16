<script setup lang="ts">
import { ref } from 'vue'

const shadows = ['never', 'hover', 'always']

const shadowActive = ref('never')
</script>

<template>
  <ne-radio-group v-model="shadowActive" style="margin-bottom: 14px">
    <ne-radio-button v-for="shadow in shadows" :key="shadow" :value="shadow">{{
      shadow
    }}</ne-radio-button>
  </ne-radio-group>

  <ne-card :shadow="shadowActive" style="max-width: 400px">
    <template #header>{{ shadowActive }} shadow</template>
    <p>{{ shadowActive }} shadow content...</p>
  </ne-card>
</template>

<style scoped>
p {
  margin: 0;
}
</style>
