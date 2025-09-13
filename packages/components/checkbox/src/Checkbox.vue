<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { computed } from 'vue'
import { checkboxProps, checkboxEmits } from './checkbox'

// 组件命名
defineOptions({ name: 'ne-checkbox' })

// 生成命名空间
const ns = createNameSpace('checkbox')

// 生成自定义类名
const classCustom = computed(() => {
  return [ns.b(), ns.is('checked', isChecked.value)]
})

// 获取 props 和 emits
const props = defineProps(checkboxProps)
const emits = defineEmits(checkboxEmits)

// 计算是否选中
const isChecked = computed(() => {
  if (props.trueValue) {
    return props.modelValue === props.trueValue
  }
  return props.modelValue === true
})

//
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  // 如果定义了 trueValue 和 falseValue，则根据选中状态返回对应的值
  // 否则，返回布尔值
  const newValue = target.checked
    ? props.trueValue
      ? props.trueValue
      : true
    : props.falseValue
      ? props.falseValue
      : false

  emits('update:modelValue', newValue)
}
</script>

<template>
  <label :class="classCustom">
    <span :class="ns.e('input')">
      <input
        type="checkbox"
        :value="value"
        :checked="isChecked"
        :class="ns.e('original')"
        @change="handleChange"
      />
      <span :class="ns.e('inner')"></span>
    </span>
    <span :class="ns.e('label')">
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<style scoped></style>
