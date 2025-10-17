<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { loadingProps } from './loading'
import { ref, watch, onUnmounted } from 'vue'

// 组件命名
defineOptions({ name: 'ne-loading' })

// 生成命名空间
const ns = createNameSpace('loading')

// 定义 props
const props = defineProps(loadingProps)

// 是否显示加载动画
const isVisible = ref(false)
// 定时器
let time: ReturnType<typeof setTimeout> | undefined

// 监听 visible 变化
watch(
  () => props.visible,
  (newVal) => {
    // 当 visible 变化时，清除之前的定时器
    clearTimeout(time)
    // 当 visible 为 true 时，根据 delay 延迟显示加载动画
    if (newVal) {
      // 当 delay 大于 0 时，延迟显示加载动画
      if (props.delay && props.delay > 0) {
        time = setTimeout(() => {
          isVisible.value = true
        }, props.delay)
      }
      // 当 delay 小于等于 0 时，立即显示加载动画
      else {
        isVisible.value = true
      }
    }
    // 当 visible 为 false 时，立即隐藏加载动画
    else {
      isVisible.value = false
    }
  },
  { immediate: true }
)

// 组件卸载时清理定时器
onUnmounted(() => {
  clearTimeout(time)
})
</script>

<template>
  <div :class="ns.e('container')">
    <slot></slot>

    <div
      v-if="isVisible"
      :class="ns.e('mask')"
      :style="{ backgroundColor: background }"
    >
      <div :class="ns.e('spinner')">
        <div :class="ns.e('icon')">
          <slot name="icon">
            <svg viewBox="0 0 50 50" :class="ns.e('circular')">
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-dasharray="31.416"
                stroke-dashoffset="31.416"
              />
            </svg>
          </slot>
        </div>
        <div :class="ns.e('text')" v-if="text || $slots.text">
          <slot name="text">
            {{ text }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
