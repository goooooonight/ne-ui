<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { computed, onMounted, ref } from 'vue'
import { messageProps } from './message'
import { Info, CheckOne, CloseOne, Attention, Close } from '@icon-park/vue-next'
import { NeIcon } from '@ne-ui/components/icon'

// 组件命名
defineOptions({ name: 'ne-message' })

// 生成命名空间
const ns = createNameSpace('message')

// 获取props
const props = defineProps(messageProps)

// 自定义类名
const classCustom = computed(() => {
  return [ns.b(), props.customClass]
})

// 自定义图标类名
const iconClass = computed(() => {
  return [ns.e('icon'), ns.em('icon', props.type)]
})

// 建立 icon 和 type 映射关系
const typeIconMap = {
  primary: Info,
  success: CheckOne,
  warning: Attention,
  error: CloseOne,
  info: Info
}

// 消息是否可见
const visible = ref(false)

// 组件挂载时 显示消息
onMounted(() => {
  visible.value = true
})

// 组件销毁时 隐藏信息
const close = () => {
  visible.value = false
}

defineExpose({
  close
})
</script>

<template>
  <transition name="ne-message" @after-leave="$emit('destroy')">
    <div :class="classCustom" v-show="visible">
      <ne-icon :icon="typeIconMap[type]" :class="iconClass"></ne-icon>
      <span :class="ns.e('content')">{{ message }}</span>
      <ne-icon
        v-if="closable"
        :icon="Close"
        :class="ns.m('closeBtn')"
        @click="close"
      ></ne-icon>
    </div>
  </transition>
</template>

<style scoped></style>
