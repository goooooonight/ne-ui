<script setup lang="ts">
import { provide, toRef } from 'vue'
import { createNameSpace } from '@ne-ui/utils'
import { radioGroupProps, radioGroupEmits } from './radio-group'
import { radioGroupKey } from './radio-group-key'

// 组件命名
defineOptions({ name: 'ne-radio-group' })

// 创建命名空间
const ns = createNameSpace('radio-group')

// 定义props和emits
const props = defineProps(radioGroupProps)
const emit = defineEmits(radioGroupEmits)

/**
 * 更新选中值
 * @param value - 新的选中值
 */
const updateValue = (value: string | number | boolean | undefined) => {
  emit('update:modelValue', value)

  // 只有值真正改变时才触发change事件
  const oldValue = props.modelValue
  if (oldValue !== value) {
    emit('change', value)
  }
}

// 向子Radio组件提供上下文
provide(radioGroupKey, {
  modelValue: toRef(props, 'modelValue'),
  disabled: toRef(props, 'disabled'),
  name: toRef(props, 'name'),
  size: toRef(props, 'size'),
  updateValue
})
</script>

<template>
  <div :class="ns.b()">
    <slot></slot>
  </div>
</template>

<style scoped></style>
