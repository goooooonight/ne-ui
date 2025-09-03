<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { computed } from 'vue'
import { inputProps } from './input'

// 组件命名
defineOptions({ name: 'ne-input' })

// 生成命名空间
const ns = createNameSpace('input')

// 获取传入参数
const props = defineProps(inputProps)

// 生成样式
const classCustom = computed(() => {
  const { size } = props
  return [ns.b(), ns.m(size)]
})
</script>

<template>
  <input :placeholder="ns.b()" :class="classCustom" />
</template>

<style scoped></style>
