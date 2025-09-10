<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { radioProps, radioEmits } from './radio'
import { computed } from 'vue'

// 创建命名空间
const ns = createNameSpace('radio')

// 定义props和emits
const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

// 生成样式
const classCustom = computed(() => {
  const { modelValue, value, disabled } = props
  return [
    ns.b(),
    ns.is('checked', modelValue === value),
    ns.is('disabled', disabled)
  ]
})

/**
 * 处理radio选中状态变化
 * @param event - change事件对象
 */
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.checked) {
    emit('update:modelValue', props.value as string | number | boolean)
  }
}
</script>

<template>
  <label :class="classCustom">
    <span :class="ns.e('input')">
      <input
        type="radio"
        :value="value"
        :checked="modelValue === value"
        :disabled="disabled"
        :class="ns.e('original')"
        @change="handleChange"
      />
      <span :class="ns.e('inner')"></span>
    </span>
    <span :class="ns.e('label')">
      <slot></slot>
    </span>
  </label>
</template>

<style scoped></style>
