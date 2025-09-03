<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'

// 生成命名空间
const ns = createNameSpace('input')

// 生成样式
const classCustom = ns.b()
</script>

<template>
  <input :placeholder="ns.b()" :class="classCustom" />
</template>

<style scoped></style>
