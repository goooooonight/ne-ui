<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { provide, toRef } from 'vue'
import { avatarGroupProps } from './avatar-group'
import { avatarGroupKey } from './avatar-group-key'

// 组件命名
defineOptions({ name: 'ne-avatar-group' })

// 生成命名空间
const ns = createNameSpace('avatar-group')

// 获取 props
const props = defineProps(avatarGroupProps)

// 向子 Avatar 组件提供上下文
provide(avatarGroupKey, {
  shape: toRef(props, 'shape'),
  size: toRef(props, 'size')
})
</script>

<template>
  <div :class="ns.b()">
    <slot></slot>
  </div>
</template>

<style scoped></style>
