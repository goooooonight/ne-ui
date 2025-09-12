<script setup lang="ts">
import { ref } from 'vue'

const radio = ref('')
</script>

<template>
  <ne-radio v-model="radio" value="checked">Radio</ne-radio>
</template>
