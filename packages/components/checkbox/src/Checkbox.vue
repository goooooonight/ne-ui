<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { computed, inject } from 'vue'
import { checkboxProps, checkboxEmits } from './checkbox'
import { checkboxGroupKey } from './checkbox-group-key'

// 组件命名
defineOptions({ name: 'ne-checkbox' })

// 生成命名空间
const ns = createNameSpace('checkbox')

// 生成自定义类名
const classCustom = computed(() => {
  return [
    ns.b(),
    ns.is('checked', isChecked.value),
    ns.is('disabled', isDisabled.value),
    ns.is('indeterminate', props.indeterminate)
  ]
})

// 获取 props 和 emits
const props = defineProps(checkboxProps)
const emits = defineEmits(checkboxEmits)

// 注入CheckboxGroup上下文
const checkboxGroup = inject(checkboxGroupKey, null)

// 计算是否选中
const isChecked = computed(() => {
  // 在 checkbox-group 中时，判断绑定数组是否含有该value
  if (checkboxGroup) {
    return checkboxGroup.modelValue.value.includes(props.value)
  }
  // 没有 checkbox-group 时
  else {
    if (props.trueValue) {
      return props.modelValue === props.trueValue
    }
    return props.modelValue === true
  }
})

// 计算是否处于禁用状态
const isDisabled = computed(() => {
  // 如果没有 checkboxGroup，直接返回 props.disabled
  if (!checkboxGroup?.modelValue) {
    return props.disabled
  }

  const currentCount = checkboxGroup.modelValue.value.length
  const minValue = checkboxGroup.min?.value
  const maxValue = checkboxGroup.max?.value

  // 检查最小值限制：当前已选中且选中数量已达到最小值时，禁用取消选中
  if (minValue && isChecked.value && currentCount <= minValue) {
    return true
  }

  // 检查最大值限制：当前未选中且选中数量已达到最大值时，禁用选中
  if (maxValue && !isChecked.value && currentCount >= maxValue) {
    return true
  }

  return checkboxGroup.disabled.value
})

// 值改变事件
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  // 在 checkbox-group 中时
  if (checkboxGroup) {
    // 当前为选中操作时， 将value加入绑定数组
    if (target.checked) {
      checkboxGroup.updateValue(
        checkboxGroup.modelValue.value.concat(props.value)
      )
    }
    // 当前为取消选中操作时， 将value过滤出绑定数组
    else {
      checkboxGroup.updateValue(
        checkboxGroup.modelValue.value.filter(
          (value: string | number) => value != props.value
        )
      )
    }
    // 触发change事件，传递当前选中的值
    emits('change', target.checked)
  }
  // 没有 checkbox-group 时
  else {
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
    // 触发change事件，传递当前选中的值
    emits('change', newValue)
  }
}
</script>

<template>
  <label :class="classCustom">
    <span :class="ns.e('input')">
      <input
        type="checkbox"
        :value="value"
        :checked="isChecked"
        :disabled="isDisabled"
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
