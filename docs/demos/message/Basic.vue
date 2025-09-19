<script setup lang="ts">
import { NeMessage } from '@ne-ui/components'

const open = () => {
  NeMessage('This is NeMessage')
}
</script>

<template>
  <ne-button plain @click="open">Show Message</ne-button>
</template>
