<script setup lang="ts">
import { NeMessage } from '@ne-ui/components'

const open = (duration: number) => {
  NeMessage({
    message: 'The quietest moments often speak the loudest truths。',
    duration: duration
  })
}
</script>

<template>
  <ne-button plain @click="open(1000)">1 seconds</ne-button>
  <ne-button plain @click="open(3000)">3 seconds</ne-button>
  <ne-button plain @click="open(10000)">10 seconds</ne-button>
  <ne-button plain @click="open(0)">Never close</ne-button>
</template>
