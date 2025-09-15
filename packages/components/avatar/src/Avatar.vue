<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { computed } from 'vue'
// import { avatarProps } from './avatar'

// 组件命名
defineOptions({ name: 'ne-avatar' })

// 生成命名空间
const ns = createNameSpace('avatar')

// 生成自定义类名
const classCustom = computed(() => {
  return [ns.b()]
})
</script>

<template>
  <span :class="classCustom"></span>
</template>

<style scoped></style>
