<script setup lang="ts">
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(true)
const checked3 = ref(false)
</script>

<template>
  <ne-checkbox v-model="checked1" disabled>OptionA</ne-checkbox>
  <ne-checkbox v-model="checked2" disabled>OptionB</ne-checkbox>
  <ne-checkbox v-model="checked3" indeterminate disabled>Check All</ne-checkbox>
</template>
