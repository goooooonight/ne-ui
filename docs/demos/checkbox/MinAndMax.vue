<script setup lang="ts">
import { ref } from 'vue'

const hobbies = ['Music', 'Sports', 'Travel', 'Reading', 'Movies']

const checkList = ref(['Music'])
</script>

<template>
  <ne-checkbox-group v-model="checkList" :min="2" :max="4">
    <ne-checkbox v-for="hobby in hobbies" :key="hobby" :value="hobby">{{
      hobby
    }}</ne-checkbox>
  </ne-checkbox-group>
</template>
