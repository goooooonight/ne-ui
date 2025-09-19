<script setup lang="ts">
import { NeMessage } from '@ne-ui/components'

const open = () => {
  NeMessage.warning({
    message: 'In a world full of algorithms, be a human.',
    customClass: 'example'
  })
}
</script>

<template>
  <ne-button plain @click="open">Custom Class</ne-button>
</template>

<style>
.example {
  font-family: 'Georgia', serif;
  font-style: italic;
  color: #5a2e0e;
  background-color: #fffbe0;
}
</style>
