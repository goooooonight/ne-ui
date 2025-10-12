<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { onMounted, provide, ref, toRefs } from 'vue'
import { formProps } from './form'
import { formKey } from './form-key'
import type { FormItemContext } from './form-item-key'
import type { FormValidateCallback, Arrayable } from './type'

// 组件命名
defineOptions({ name: 'ne-form' })

// 生成命名空间
const ns = createNameSpace('form')

// 获取 props
const props = defineProps(formProps)

// 表单项上下文数组
const fields = ref<FormItemContext[]>([])

// 表单初始值
const initialValues = ref<Record<string, any>>({})

// 添加表单项上下文
const addField = (field: FormItemContext) => {
  fields.value.push({
    ...field,
    labelRef: field.labelRef.value
  })

  // 获取表单项初始值
  if (field.prop && props.model) {
    initialValues.value[field.prop] = props.model[field.prop]
  }
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

// 重置表单
const resetFields = (props?: Arrayable<string>) => {
  // 如果传入props参数，只重置传入prop的表单项
  if (props) {
    fields.value.forEach((field) => {
      if (field.prop && props.includes(field.prop)) {
        field.resetField()
      }
    })
  }
  // 如果没有传入props参数，默认重置所有表单项
  else {
    fields.value.forEach((field) => field.resetField())
  }
}

// 各表单项 label 的 margin
const labelMargins = ref<Record<string, number>>({})

// 组件挂载时执行
onMounted(() => {
  // 当 label-width 设置为 auto 时，计算各表单项 label 的宽度
  if (props.labelWidth === 'auto') {
    // 存储各表单项 label 的宽度
    const labelWidths: number[] = []

    // 遍历各表单项，获取其 label 宽度
    fields.value.forEach((field) => {
      labelWidths.push(field.labelRef?.getBoundingClientRect().width || 0)
    })
    const maxWidth = Math.max(...labelWidths)

    // 计算各表单项 label 的 margin
    fields.value.forEach((field, index) => {
      labelMargins.value[field.prop] = Math.round(maxWidth - labelWidths[index])
    })
  }
})

// 向 FormItem 提供上下文
provide(formKey, {
  ...toRefs(props),
  initialValues,
  labelMargins,
  addField
})

// 暴露部分方法
defineExpose({
  validate,
  clearValidate,
  resetFields
})
</script>

<template>
  <form :class="ns.b()">
    <slot></slot>
  </form>
</template>

<style scoped></style>
