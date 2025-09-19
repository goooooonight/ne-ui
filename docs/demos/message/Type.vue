<script setup lang="ts">
import { NeMessage } from '@ne-ui/components'

const primary = () => {
  NeMessage.primary('Your request is being processed...')
}
const success = () => {
  NeMessage.success('Your message has been sent.')
}
const warning = () => {
  NeMessage.warning('Your session will expire in 5 minutes.')
}
const info = () => {
  NeMessage.info('New updates are available.')
}
const error = () => {
  NeMessage.error('Network error. Check your connection.')
}
</script>

<template>
  <ne-button plain @click="primary">primary</ne-button>
  <ne-button plain @click="success">success</ne-button>
  <ne-button plain @click="warning">warning</ne-button>
  <ne-button plain @click="info">info</ne-button>
  <ne-button plain @click="error">error</ne-button>
</template>
