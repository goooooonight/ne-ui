<script setup lang="ts">
import { ref } from 'vue'

const radio1 = ref('disabled2')
</script>

<template>
  <ne-radio-group v-model="radio1" disabled>
    <ne-radio value="disabled1">Diabled</ne-radio>
    <ne-radio value="disabled2">Diabled</ne-radio>
  </ne-radio-group>
</template>
