<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { computed } from 'vue'
import { messageProps } from './message'
import { IpInfo, IpCheckOne, IpCloseOne, IpAttention } from 'vue-icons-plus/ip'
// 组件命名
defineOptions({ name: 'ne-message' })

// 生成命名空间
const ns = createNameSpace('message')

// 获取props
const props = defineProps(messageProps)

// 自定义类名
const classCustom = computed(() => {
  return [ns.b()]
})

// 自定义图标类名
const iconClass = computed(() => {
  return [ns.e('icon'), ns.em('icon', props.type)]
})

// 建立 icon 和 type 映射关系
const typeIconMap = {
  primary: IpInfo,
  success: IpCheckOne,
  warning: IpAttention,
  error: IpCloseOne,
  info: IpInfo
}
</script>

<template>
  <!-- <transition name="ne-message"> -->
  <div :class="classCustom">
    <ne-icon :icon="typeIconMap[type]" :class="iconClass"></ne-icon>
    <span :class="ns.e('content')">{{ message }}</span>
  </div>
  <!-- </transition> -->
</template>

<style scoped></style>
