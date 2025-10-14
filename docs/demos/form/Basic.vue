<script setup lang="ts">
import { ref } from 'vue'
import type { ValidateFieldsError } from 'async-validator'

const formRef = ref()

const form = ref({
  username: '',
  password: '',
  remember: false
})

const formRules = ref({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
  ],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
})

const submit = async () => {
  await formRef.value
    .validate()
    .catch((error: ValidateFieldsError) => console.log('校验失败', error))
}
</script>

<template>
  <ne-form
    ref="formRef"
    :model="form"
    :rules="formRules"
    label-width="auto"
    style="max-width: 400px"
  >
    <ne-form-item label="Username" prop="username">
      <ne-input v-model="form.username"></ne-input>
    </ne-form-item>
    <ne-form-item label="Password" prop="password">
      <ne-input v-model="form.password" show-password></ne-input>
    </ne-form-item>
    <ne-form-item>
      <ne-checkbox v-model="form.remember">Remember me</ne-checkbox>
    </ne-form-item>
    <ne-form-item>
      <ne-button type="primary" plain @click="submit">Submit</ne-button>
    </ne-form-item>
  </ne-form>
</template>
