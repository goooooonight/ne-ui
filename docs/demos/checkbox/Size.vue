<script setup lang="ts">
import { ref } from 'vue'

const sizes = ['small', 'default', 'large']
const list = ['Cookies', 'Location', 'Camera', 'Microphone', 'Ads']

const size = ref('default')
const checkList = ref(['Cookies'])
</script>

<template>
  <ne-radio-group v-model="size" style="margin-bottom: 20px">
    <ne-radio-button v-for="size in sizes" :key="size" :value="size">{{
      size
    }}</ne-radio-button>
  </ne-radio-group>

  <ne-checkbox-group :size="size" v-model="checkList">
    <ne-checkbox v-for="item in list" :key="item" :value="item">{{
      item
    }}</ne-checkbox>
  </ne-checkbox-group>
</template>
