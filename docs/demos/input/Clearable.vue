<script setup lang="ts">
import { ref } from 'vue'

const clearText = ref('')
const clearPsw = ref('')
</script>

<template>
  <div class="example-clearable">
    <ne-input
      v-model="clearText"
      clearable
      placeholder="clearable"
      style="width: 230px"
    ></ne-input>
    <ne-input
      v-model="clearPsw"
      show-password
      clearable
      placeholder="clearable show-password"
      style="width: 230px"
    ></ne-input>
  </div>
</template>

<style scoped>
.example-clearable {
  display: flex;
  gap: 16px;
}
</style>
