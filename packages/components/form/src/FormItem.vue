<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { computed, provide } from 'vue'
import { formItemProps } from './form-item'

// 组件命名
defineOptions({ name: 'ne-form-item' })

// 获取props
const props = defineProps(formItemProps)

// 生成命名空间
const ns = createNameSpace('form-item')

// 生成唯一的表单项 id
const generateFormItemId = (): string => {
  return `ne-form-item-${Math.random().toString(36).substring(2, 6)}-${Date.now()}`
}

// 生成或使用传入的 for 属性作为 id
const formItemId = computed(() => {
  return props.for || generateFormItemId()
})

// 通过 provide 将 id 提供给子组件
provide('formItemId', formItemId.value)
</script>

<template>
  <div :class="ns.b()">
    <slot name="label">
      <label :class="ns.e('label')" :for="formItemId">{{ label }}</label>
    </slot>
    <div :class="ns.e('content')">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
