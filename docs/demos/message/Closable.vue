<script setup lang="ts">
import { NeMessage } from '@ne-ui/components'

const open = () => {
  NeMessage.success({
    message: 'Profile updated successfully!',
    duration: 0,
    closable: true
  })
}
</script>

<template>
  <ne-button plain @click="open">Closable Message</ne-button>
</template>
