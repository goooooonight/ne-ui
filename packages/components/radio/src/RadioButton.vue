<script setup lang="ts">
import { computed, inject } from 'vue'
import { createNameSpace } from '@ne-ui/utils'
import { radioButtonProps } from './radio-button'
import { radioGroupKey } from './radio-group-key'

// 组件命名
defineOptions({ name: 'ne-radio-button' })

// 创建命名空间
const ns = createNameSpace('radio-button')

// 定义props和emits
const props = defineProps(radioButtonProps)

// 注入RadioGroup上下文
const radioGroup = inject(radioGroupKey, null)

// 计算当前选中状态
const isChecked = computed(() => {
  return radioGroup?.modelValue.value === props.value
})

// 计算禁用状态
const isDisabled = computed(() => {
  return radioGroup ? radioGroup.disabled.value : props.disabled
})

// 生成样式
const classCustom = computed(() => {
  return [
    ns.b(),
    ns.is('checked', isChecked.value),
    ns.is('disabled', isDisabled.value)
  ]
})

/**
 * 处理radio选中状态变化
 * @param event - change事件对象
 */
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.checked) {
    if (radioGroup) {
      // 如果在RadioGroup中，使用RadioGroup的更新方法
      radioGroup.updateValue(props.value)
    }
  }
}
</script>

<template>
  <label :class="classCustom">
    <input
      type="radio"
      :value="value"
      :checked="isChecked"
      :disabled="isDisabled"
      :name="radioGroup ? radioGroup.name.value : name"
      :class="ns.e('original')"
      @change="handleChange"
    />
    <span :class="ns.e('inner')">
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<style scoped></style>
