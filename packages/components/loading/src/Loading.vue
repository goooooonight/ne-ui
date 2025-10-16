<script setup lang="ts">
// import { computed, inject, ref, watch } from 'vue'
import { createNameSpace } from '@ne-ui/utils'
import { loadingProps } from './loading'

// 组件命名
defineOptions({ name: 'ne-loading' })

// 生成命名空间
const ns = createNameSpace('loading')

defineProps(loadingProps)
</script>

<template>
  <div :class="ns.e('container')">
    <slot></slot>

    <div
      :class="ns.e('mask')"
      v-if="visible"
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
