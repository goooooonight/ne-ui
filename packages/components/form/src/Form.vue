<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { provide } from 'vue'
import { formProps } from './form'
import { formKey } from './form-key'

// 组件命名
defineOptions({ name: 'ne-form' })

// 生成命名空间
const ns = createNameSpace('form')

// 获取 props
const props = defineProps(formProps)

// 向 FormItem 提供上下文
provide(formKey, { ...props })
</script>

<template>
  <form :class="ns.b()">
    <slot></slot>
  </form>
</template>

<style scoped></style>
