<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { provide, ref } from 'vue'
import { formProps } from './form'
import { formKey } from './form-key'
import type { FormItemContext } from './form-item-key'
// import type { FormValidateCallback } from './type'

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
// const validate = (callback?: FormValidateCallback): Promise<void> => {
const validate = () => {
  // 执行每个表单项的校验规则
  fields.value.forEach(async (field) => {
    await field.validate()
  })
}

// 向 FormItem 提供上下文
provide(formKey, {
  ...props,
  addField
})

// 暴露部分方法
defineExpose({
  validate
})
</script>

<template>
  <form :class="ns.b()">
    <slot></slot>
  </form>
</template>

<style scoped></style>
