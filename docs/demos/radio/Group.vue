<script setup lang="ts">
import { ref } from 'vue'

const radio = ref('1')
</script>

<template>
  <ne-radio-group v-model="radio">
    <ne-radio value="1">Credit Card</ne-radio>
    <ne-radio value="2">PayPal</ne-radio>
    <ne-radio value="3">Bank Transfer</ne-radio>
    <ne-radio value="4">Cash on Delivery</ne-radio>
  </ne-radio-group>
</template>
