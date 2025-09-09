<script setup lang="ts">
import { createNameSpace } from '@ne-ui/utils'
import { ref } from 'vue'

// 创建命名空间
const ns = createNameSpace('radio')

//
const value = ref<boolean>(false)

/**
 * 处理radio选中状态变化
 * @param event - change事件对象
 */
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  value.value = target.checked
}
</script>

<template>
  <label :class="[ns.b(), value && ns.is('checked', value)]">
    <span :class="ns.e('input')">
      <input
        type="radio"
        :class="ns.e('original')"
        v-model="value"
        :checked="value"
        @change="handleChange"
      />
      <span :class="ns.e('inner')"></span>
    </span>
    <span :class="ns.e('label')">
      <slot></slot>
    </span>
  </label>
</template>

<style scoped></style>
