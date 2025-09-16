<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { computed } from 'vue'
// import { cardProps } from './card'

// 组件命名
defineOptions({ name: 'ne-card' })

// 生成命名空间
const ns = createNameSpace('card')

// 获取 props
// const props = defineProps(cardProps)

// 生成自定义类名
const classCustom = computed(() => {
  return [ns.b()]
})
</script>

<template>
  <div :class="classCustom">
    <div v-if="$slots.header" :class="ns.e('header')">
      <slot name="header"></slot>
    </div>
    <div v-if="$slots.default" :class="ns.e('body')">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" :class="ns.e('footer')">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped></style>
