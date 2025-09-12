<script setup lang="ts">
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('2')
</script>

<template>
  <div class="example-radio-button">
    <ne-radio-group v-model="radio1" size="large">
      <ne-radio-button value="1">All Prices</ne-radio-button>
      <ne-radio-button value="2">$0 - $50</ne-radio-button>
      <ne-radio-button value="3">$51 - $100</ne-radio-button>
      <ne-radio-button value="4">$101 - $200</ne-radio-button>
      <ne-radio-button value="5">$200+</ne-radio-button>
    </ne-radio-group>
  </div>

  <div class="example-radio-button">
    <ne-radio-group v-model="radio2" size="default">
      <ne-radio-button value="1">All Prices</ne-radio-button>
      <ne-radio-button value="2">$0 - $50</ne-radio-button>
      <ne-radio-button value="3">$51 - $100</ne-radio-button>
      <ne-radio-button value="4" disabled>$101 - $200</ne-radio-button>
      <ne-radio-button value="5">$200+</ne-radio-button>
    </ne-radio-group>
  </div>

  <div>
    <ne-radio-group v-model="radio3" size="small" disabled>
      <ne-radio-button value="1">All Prices</ne-radio-button>
      <ne-radio-button value="2">$0 - $50</ne-radio-button>
      <ne-radio-button value="3">$51 - $100</ne-radio-button>
      <ne-radio-button value="4">$101 - $200</ne-radio-button>
      <ne-radio-button value="5">$200+</ne-radio-button>
    </ne-radio-group>
  </div>
</template>

<style scoped>
.example-radio-button {
  margin-bottom: 16px;
}
</style>
