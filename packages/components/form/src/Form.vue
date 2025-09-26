<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'

// 组件命名
defineOptions({ name: 'ne-form' })

// 生成命名空间
const ns = createNameSpace('form')
</script>

<template>
  <form :class="ns.b()">
    <slot></slot>
  </form>
</template>

<style scoped></style>
