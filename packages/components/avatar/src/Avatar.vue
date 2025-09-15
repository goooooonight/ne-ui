<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { computed, inject } from 'vue'
import { avatarProps } from './avatar'
import { avatarGroupKey } from './avatar-group-key'

// 组件命名
defineOptions({ name: 'ne-avatar' })

// 生成命名空间
const ns = createNameSpace('avatar')

// 获取 props
const props = defineProps(avatarProps)

// 注入AvatarGroup上下文
const avatarGroup = inject(avatarGroupKey, null)

// 计算形状属性
const shape = computed(() => {
  return avatarGroup?.shape.value || props.shape
})

// 计算尺寸属性
const size = computed(() => {
  return avatarGroup?.size.value || props.size
})

// 生成自定义类名
const classCustom = computed(() => {
  return [
    ns.b(),
    ns.m(shape.value),
    typeof size.value === 'string' && ns.m(size.value)
  ]
})

// 生成内联样式
const style = computed(() => {
  // 当 size 为 number 类型时，自定义宽高
  return typeof size.value === 'number'
    ? {
        width: `${size.value}px`,
        height: `${size.value}px`
      }
    : undefined
})
</script>

<template>
  <span :class="classCustom" :style="style">
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      :srcset="srcset"
      :style="{ 'object-fit': fit }"
    />
    <ne-icon v-else-if="icon" :icon="icon" :class="ns.m('icon')"></ne-icon>
    <slot v-else></slot>
  </span>
</template>

<style scoped></style>
