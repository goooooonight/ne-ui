<script setup lang="ts">
import { ref } from 'vue'

const password = ref('')
</script>

<template>
  <div>
    <ne-input
      v-model="password"
      show-password
      placeholder="password"
      style="width: 230px"
    ></ne-input>
  </div>
</template>
