<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { computed, ref } from 'vue'
import { inputProps } from './input'
import { IpPreviewOpen, IpPreviewCloseOne } from 'vue-icons-plus/ip'
// 组件命名
defineOptions({ name: 'ne-input' })

// 生成命名空间
const ns = createNameSpace('input')

// 获取传入参数
const props = defineProps(inputProps)

// 生成样式
const classCustom = computed(() => {
  const { size } = props
  return [ns.b(), ns.m(size)]
})

// 管理输入框类型（用于密码显示/隐藏功能）
const inputType = ref(props.showPassword ? 'password' : props.type)
// 密码是否可见
const pswVisible = ref(!props.showPassword)
// 切换密码显示状态
const togglePswVisible = () => {
  if (props.showPassword) {
    pswVisible.value = !pswVisible.value
    inputType.value = pswVisible.value ? 'text' : 'password'
  }
}
</script>

<template>
  <div :class="classCustom" tabindex="0">
    <input :type="inputType" :placeholder="ns.b()" :class="ns.e('inner')" />
    <span :class="ns.e('suffix')" v-if="showPassword">
      <ne-icon
        :icon="pswVisible ? IpPreviewOpen : IpPreviewCloseOne"
        @click="togglePswVisible"
      ></ne-icon>
    </span>
  </div>
</template>

<style scoped></style>
