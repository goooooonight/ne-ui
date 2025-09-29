<script setup lang="ts">
import { computed, inject } from 'vue'
import { createNameSpace } from '@ne-ui/utils'
import { radioProps, radioEmits } from './radio'
import { radioGroupKey } from './radio-group-key'
import { formItemKey } from '../../form/src/form-item-key'

// 组件命名
defineOptions({ name: 'ne-radio' })

// 创建命名空间
const ns = createNameSpace('radio')

// 定义props和emits
const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

// 注入 FormItem 上下文
const formItem = inject(formItemKey, null)

// 注入RadioGroup上下文
const radioGroup = inject(radioGroupKey, null)

// 计算当前选中状态
const isChecked = computed(() => {
  if (radioGroup) {
    return radioGroup.modelValue.value === props.value
  }
  return props.modelValue === props.value
})

// 计算禁用状态
const isDisabled = computed(() => {
  return radioGroup?.disabled.value || props.disabled
})

// 计算尺寸
const size = computed(() => {
  return props.size || radioGroup?.size.value
})

// 生成样式
const classCustom = computed(() => {
  return [
    ns.b(),
    ns.is('checked', isChecked.value),
    ns.is('disabled', isDisabled.value),
    ns.m(size.value)
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
    } else {
      // 独立使用时，直接触发事件
      emit('update:modelValue', props.value as string | number | boolean)
    }
    // 触发change事件，传递当前选中的值
    emit('change', props.value as string | number | boolean)
  }

  // 进行校验
  formItem?.validate('change')
}
</script>

<template>
  <label :class="classCustom">
    <span :class="ns.e('input')">
      <input
        type="radio"
        :value="value"
        :checked="isChecked"
        :disabled="isDisabled"
        :name="radioGroup ? radioGroup.name.value : name"
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
