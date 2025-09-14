<script setup lang="ts">
import { ref } from 'vue'

const permissions = ['View', 'Edit', 'Delete', 'Share', 'Admin']

const checkList = ref(['Edit'])
const checkAll = ref(false)
const isIndeterminate = ref(true)

const handleCheckAllChange = (value: string) => {
  checkList.value = value ? permissions : []
  isIndeterminate.value = false
}
const handlePermissionsChange = (value: string[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === permissions.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < permissions.length
}
</script>

<template>
  <ne-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
    style="margin-bottom: 10px"
    >Check All</ne-checkbox
  >
  <ne-checkbox-group v-model="checkList" @change="handlePermissionsChange">
    <ne-checkbox
      v-for="permission in permissions"
      :key="permission"
      :value="permission"
      >{{ permission }}</ne-checkbox
    >
  </ne-checkbox-group>
</template>
