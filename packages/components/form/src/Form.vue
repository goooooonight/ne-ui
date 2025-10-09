<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { provide, ref } from 'vue'
import { formProps } from './form'
import { formKey } from './form-key'
import type { FormItemContext } from './form-item-key'
import type { FormValidateCallback } from './type'

// 组件命名
defineOptions({ name: 'ne-form' })

// 生成命名空间
const ns = createNameSpace('form')

// 获取 props
const props = defineProps(formProps)

// 表单项上下文数组
const fields = ref<Array<FormItemContext>>([])

// 添加表单项上下文
const addField = (field: FormItemContext) => {
  fields.value.push(field)
}

// 校验表单
const validate = async (callback?: FormValidateCallback): Promise<void> => {
  // 存储校验失败的字段信息
  const invalidFields = {}

  // 执行每个表单项的校验规则
  const validateResults = await Promise.all(
    fields.value.map(async (field) => {
      try {
        return await field.validate()
      } catch (error) {
        Object.assign(invalidFields, error)
        return false
      }
    })
  )

  // 获取所有表单项是否校验成功
  const isValid = validateResults.every((result) => result === true)

  // 如果传入则执行回调函数
  if (callback) {
    if (isValid) {
      callback(isValid)
    } else {
      callback(false, invalidFields)
    }
  }
}

// 清除所有表单项的校验信息
const clearValidate = () => {
  fields.value.forEach((field) => field.clearValidate())
}

// 向 FormItem 提供上下文
provide(formKey, {
  ...props,
  addField
})

// 暴露部分方法
defineExpose({
  validate,
  clearValidate
})
</script>

<template>
  <form :class="ns.b()">
    <slot></slot>
  </form>
</template>

<style scoped></style>
