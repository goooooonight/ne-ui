<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { computed } from 'vue'
import { avatarProps } from './avatar'

// 组件命名
defineOptions({ name: 'ne-avatar' })

// 生成命名空间
const ns = createNameSpace('avatar')

// 获取 props
const props = defineProps(avatarProps)

// 生成自定义类名
const classCustom = computed(() => {
  const { shape, size } = props
  return [ns.b(), ns.m(shape), typeof size === 'string' && ns.m(size)]
})

// 生成内联样式
const style = computed(() => {
  // 当 size 为 number 类型时，自定义宽高
  return typeof props.size === 'number'
    ? { width: `${props.size}px`, height: `${props.size}px` }
    : undefined
})
</script>

<template>
  <span :class="classCustom" :style="style">
    <slot></slot>
  </span>
</template>

<style scoped></style>
