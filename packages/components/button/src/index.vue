<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { buttonProps, buttonEmits } from './button'
import { computed } from 'vue'

defineOptions({ name: 'ne-button' })

// 生成命名空间
const ns = createNameSpace('button')

// 获取传入参数
const props = defineProps(buttonProps)
// 通过传入参数计算样式
const classCustom = computed(() => {
  // 解构获取参数
  const {
    type,
    size,
    round,
    plain,
    text,
    circle,
    disabled,
    icon,
    iconPlacement
  } = props
  return [
    ns.b(),
    ns.m(type),
    ns.m(size),
    ns.is('round', round),
    ns.is('plain', plain),
    ns.is('text', text),
    ns.is('circle', circle),
    ns.is('disabled', disabled),
    // 只有icon存在时才生成
    icon && ns.m(`icon-${iconPlacement}`)
  ]
})

// 获取组件触发的事件
const emits = defineEmits(buttonEmits)

// 鼠标点击事件
// eslint-disable-next-line no-undef
const handleClick = (evt: MouseEvent) => {
  emits('click', evt)
}
</script>

<template>
  <button
    :class="classCustom"
    :type="nativeType"
    :disabled="disabled"
    @click="handleClick"
  >
    <!-- 图标 - 左侧 -->
    <template v-if="icon && iconPlacement === 'left'">
      <ne-icon :icon="icon"></ne-icon>
    </template>
    <!-- 按钮文字 -->
    <span>
      <slot></slot>
    </span>
    <!-- 图标 - 右侧 -->
    <template v-if="icon && iconPlacement === 'right'">
      <ne-icon :icon="icon"></ne-icon>
    </template>
  </button>
</template>

<style scoped></style>
