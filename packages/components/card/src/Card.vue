<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { computed } from 'vue'
import { cardProps } from './card'

// 组件命名
defineOptions({ name: 'ne-card' })

// 生成命名空间
const ns = createNameSpace('card')

// 获取 props
const props = defineProps(cardProps)

// 生成自定义类名
const classCustom = computed(() => {
  const { shadow } = props
  return [ns.b(), ns.is(`${shadow}-shadow`, shadow)]
})

// 计算 header 类名
const headerClass = computed(() => {
  return [ns.e('header'), props.headerClass].filter(Boolean)
})

// 计算 body 类名
const bodyClass = computed(() => {
  return [ns.e('body'), props.bodyClass].filter(Boolean)
})

// 计算 footer 类名
const footerClass = computed(() => {
  return [ns.e('footer'), props.footerClass].filter(Boolean)
})
</script>

<template>
  <div :class="classCustom">
    <div v-if="$slots.header || header" :class="headerClass">
      <slot name="header">
        {{ header }}
      </slot>
    </div>
    <div v-if="$slots.default" :class="bodyClass">
      <slot></slot>
    </div>
    <div v-if="$slots.footer || footer" :class="footerClass">
      <slot name="footer">
        {{ footer }}
      </slot>
    </div>
  </div>
</template>

<style scoped></style>
