<script setup lang="ts">
import { ref } from 'vue'

const checked = ref()
</script>

<template>
  <ne-checkbox v-model="checked" value="checkbox">Checkbox</ne-checkbox>
</template>
