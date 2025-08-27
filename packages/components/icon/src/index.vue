<script setup lang="ts">
import { iconProps } from './icon'
import { createNameSpace } from '@ne-ui/utils'
import { computed } from 'vue'

// 获取传入参数
const props = defineProps(iconProps)

// 生成命名空间
const ns = createNameSpace('icon')

// 计算获得icon样式
const style = computed(() => {
  // 如果props中参数值都为空
  if (!props.color && !props.size) {
    return {}
  }
  return {
    color: props.color,
    fontSize: props.size ? `${props.size}px` : ''
  }
})
</script>

<template>
  <i :class="ns.b()" :style="style">
    <slot>
      <component :is="icon"></component>
    </slot>
  </i>
</template>

<style scoped></style>
