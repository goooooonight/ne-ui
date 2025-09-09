<script setup lang="ts">
import { ref } from 'vue'

const content1 = ref('')
const content2 = ref('')
const content3 = ref('')
</script>

<template>
  <div class="example-word-limit">
    <div class="example-word-limit-row">
      <ne-input
        v-model="content1"
        maxlength="3"
        placeholder="Max 3 characters"
        style="width: 130px"
      ></ne-input>
      <ne-input
        v-model="content2"
        show-word-limit
        maxlength="10"
        placeholder="Input content should not exceed 10 characters"
      ></ne-input>
    </div>
    <ne-input
      v-model="content3"
      type="textarea"
      show-word-limit
      maxlength="30"
      placeholder="Enter your message (max 30 chars)"
    ></ne-input>
  </div>
</template>

<style scoped>
.example-word-limit {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.example-word-limit-row {
  display: flex;
  gap: 10px;
}
</style>
