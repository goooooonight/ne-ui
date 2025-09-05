<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { computed, ref } from 'vue'
import { inputProps, inputEmits } from './input'
import { IpPreviewOpen, IpPreviewCloseOne, IpCloseOne } from 'vue-icons-plus/ip'
// 组件命名
defineOptions({ name: 'ne-input' })

// 生成命名空间
const ns = createNameSpace('input')

// 获取传入参数
const props = defineProps(inputProps)
// 定义emit事件
const emits = defineEmits(inputEmits)

// 生成样式
const classCustom = computed(() => {
  const { size, disabled } = props
  return [ns.b(), ns.m(size), ns.is('disabled', disabled)]
})

// 管理输入框类型（用于密码显示/隐藏功能）
const inputType = ref(props.showPassword ? 'password' : props.type)
// 密码是否可见
const pswVisible = ref(!props.showPassword)
// 切换密码显示状态
const togglePswVisible = () => {
  if (props.showPassword) {
    pswVisible.value = !pswVisible.value
    inputType.value = pswVisible.value ? 'text' : 'password'
  }
}

// 一键清除输入内容
const handleClear = () => {
  emits('update:modelValue', '')
  emits('input', '')
}

// 处理输入事件
// 实现v-model双向绑定
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value
  // 触发v-model更新
  emits('update:modelValue', value)
  // 触发input事件
  emits('input', value)
}

// 处理焦点事件
const handleFocus = (event: FocusEvent) => {
  emits('focus', event)
}

// 处理失焦事件
const handleBlur = (event: FocusEvent) => {
  emits('blur', event)
}
</script>

<template>
  <div :class="classCustom" tabindex="0">
    <!-- 输入框 -->
    <input
      :value="modelValue"
      :type="inputType"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="ns.e('inner')"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <!-- 后缀内容 -->
    <span :class="ns.e('suffix')">
      <span :class="ns.e('suffix-inner')">
        <!-- 切换密码显示/隐藏 -->
        <ne-icon
          v-if="showPassword && modelValue && !disabled"
          :icon="pswVisible ? IpPreviewOpen : IpPreviewCloseOne"
          @click="togglePswVisible"
        ></ne-icon>
        <!-- 一键清除 -->
        <ne-icon
          v-if="clearable && modelValue && !disabled"
          :icon="IpCloseOne"
          @click="handleClear"
        ></ne-icon>
      </span>
    </span>
  </div>
</template>

<style scoped></style>
