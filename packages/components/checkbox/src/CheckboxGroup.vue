<script setup lang="ts">
import { provide, toRef } from 'vue'
import { createNameSpace } from '@ne-ui/utils'
import { checkboxGroupProps, checkboxGroupEmits } from './checkbox-group'
import { checkboxGroupKey } from './checkbox-group-key'

// 组件命名
defineOptions({ name: 'ne-checkbox-group' })

// 创建命名空间
const ns = createNameSpace('checkbox-group')

// 定义props和emits
const props = defineProps(checkboxGroupProps)
const emits = defineEmits(checkboxGroupEmits)

/**
 * 更新选中值
 * @param value - 新的选中值
 */
const updateValue = (value: string[] | number[]) => {
  emits('update:modelValue', value)
  emits('change', value)
}

// 向子Checkbox组件提供上下文
provide(checkboxGroupKey, {
  modelValue: toRef(props, 'modelValue'),
  disabled: toRef(props, 'disabled'),
  min: toRef(props, 'min'),
  max: toRef(props, 'max'),
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
