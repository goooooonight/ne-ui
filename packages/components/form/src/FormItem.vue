<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { computed, inject, onMounted, provide, ref, watchEffect } from 'vue'
import { formItemProps } from './form-item'
import AsyncValidator from 'async-validator'
import { formKey } from './form-key'
import type { Arrayable, FormItemRules } from './type'
import { formItemKey } from './form-item-key'

// 组件命名
defineOptions({ name: 'ne-form-item' })

// 获取props
const props = defineProps(formItemProps)

// 生成命名空间
const ns = createNameSpace('form-item')

// 生成自定义类
const classCustom = computed(() => {
  return [
    ns.b(),
    ns.is('error', validateStatus.value === 'error'),
    ns.m(`label-${form?.labelPosition.value}`),
    ns.is('required', isRequired.value)
  ]
})

// 注入 Form 上下文
const form = inject(formKey, null)

// 生成唯一的表单项 id
const generateFormItemId = (): string => {
  return `ne-form-item-${Math.random().toString(36).substring(2, 6)}-${Date.now()}`
}

// 生成或使用传入的 for 属性作为 id
const formItemId = computed(() => {
  return props.for || generateFormItemId()
})

// 将传入参数以数组形式返回
const toArray = (
  rules: Arrayable<FormItemRules> | undefined
): FormItemRules[] => {
  // 如果参数不为空，将参数返回为数组
  if (rules) {
    return Array.isArray(rules) ? rules : [rules]
  }
  // 如果参数为空，返回空数组
  return []
}

// 计算获得表单项校验规则
const formItemRules = computed(() => {
  const _formItemRules = toArray(props.rules)

  if (form?.rules?.value && props.prop) {
    // 获取表单校验规则中该表单项对应的校验规则
    const formRules = toArray(form?.rules.value[props.prop])
    _formItemRules.push(...formRules)
  }

  return _formItemRules
})

// 计算当前表单项是否为必填项
const isRequired = computed(() => {
  return props.required || formItemRules.value.some((rule) => rule.required)
})

// 获取对应触发条件的校验规则
const getRulesByTrigger = (trigger?: string) => {
  return formItemRules.value.filter((rule) => {
    // 没有trigger的情况 - 所有时机都生效
    if (!rule.trigger || !trigger) {
      return true
    }
    // trigger 为 string 的情况
    else if (typeof rule.trigger === 'string') {
      return rule.trigger === trigger
    }
    // trigger 为 数组的情况
    else if (Array.isArray(rule.trigger)) {
      return rule.trigger.includes(trigger)
    }
  })
}

// 校验错误信息
const validateMessage = ref<string>('')
// 校验状态
const validateStatus = ref<string>('')

// 执行表单项校验
const validate = async (trigger?: string): Promise<boolean> => {
  // 如果 prop 属性为空 直接返回
  if (!props.prop || !form?.model?.value) return false

  // 获取对应校验规则
  const rules = getRulesByTrigger(trigger)

  // 如果校验规则为空，退出校验并返回真值
  if (rules.length === 0) return true

  // 创建 AsyncValidator 实例
  const validator = new AsyncValidator({
    [props.prop]: rules
  })

  try {
    // 执行校验
    await validator.validate({ [props.prop]: form?.model.value[props.prop] })
    // 校验成功，清空错误信息
    validateStatus.value = 'success'
    validateMessage.value = ''
    return true
  } catch (error: any) {
    // 校验失败，设置错误信息
    validateStatus.value = 'error'
    validateMessage.value = error.errors[0].message
    return Promise.reject(error)
  }
}

// 清除表单项的校验信息
const clearValidate = () => {
  validateStatus.value = ''
  validateMessage.value = ''
}

// 重置表单项
const resetField = () => {
  // 清除校验信息
  clearValidate()
  // 重置表单项为初始值
  if (form && form.model?.value && props.prop) {
    form.model.value[props.prop] = form.initialValues.value[props.prop]
  }
}

// 表单标签元素引用
const labelRef = ref<HTMLElement | undefined>()

// 通过 provide 将 form-item 上下文提供给子组件
const formItemContext = {
  formItemId: formItemId.value,
  prop: props.prop || '',
  labelRef,
  validate,
  clearValidate,
  resetField
}
provide(formItemKey, formItemContext)

// 表单标签外边距
const labelMargin = ref<number>(0)

// 响应式监听 labelMargins 的变化，只有在 labelWidth 为 'auto' 时才执行
watchEffect(() => {
  if (
    props.prop &&
    form?.labelWidth.value === 'auto' &&
    form?.labelMargins.value
  ) {
    labelMargin.value = form.labelMargins.value[props.prop] || 0
  } else {
    labelMargin.value = 0
  }
})

// 表单标签样式
const labelStyle = computed(() => {
  // 临时表单标签样式变量
  const _labelStyle: Record<string, string> = {}

  // 临时表单标签宽度变量
  const labelWidth: string = String(form!.labelWidth.value)
  const labelPosition: string = form!.labelPosition.value

  // 如果 labelWidth 为 auto，设置对应方向的 margin
  if (labelWidth === 'auto') {
    // 计算表单标签 margin 的方向
    if (labelPosition === 'left' || labelPosition === 'right') {
      const marginPosition =
        labelPosition === 'left' ? 'margin-right' : 'margin-left'
      _labelStyle[marginPosition] = `${labelMargin.value}px`
    }
  }
  // 如果 labelWidth 不为 auto，设置宽度
  else if (labelWidth !== '') {
    // 根据 labelWidth 是否以 px 结尾，判断是否需要添加 px 单位
    _labelStyle['width'] = labelWidth.endsWith('px')
      ? labelWidth
      : `${labelWidth}px`
  }
  return _labelStyle
})

// 组件挂载时，只有设置了 prop 属性的表单项才需要注册到表单中进行校验
onMounted(() => {
  if (props.prop) {
    form?.addField(formItemContext)
  }
})
</script>

<template>
  <div :class="classCustom">
    <div
      v-if="prop"
      :class="ns.e('label-wrap')"
      ref="labelRef"
      :style="labelStyle"
    >
      <slot name="label">
        <label :class="ns.e('label')" :for="formItemId">{{ label }}</label>
      </slot>
    </div>
    <div :class="ns.e('content')">
      <slot></slot>
      <transition :name="`${ns.namespace}-zoom-in-top`">
        <div v-if="validateStatus === 'error'" :class="ns.e('error')">
          {{ validateMessage }}
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped></style>
