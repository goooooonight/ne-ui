<script setup lang="ts">
import { Plus } from '@icon-park/vue-next'
import { ref } from 'vue'
import type { ValidateFieldsError } from 'async-validator'

const formRef = ref()

const formTest = ref({
  input: '',
  password: '',
  upload: [],
  radio: '',
  check: [],
  textarea: ''
})

const formRules = ref({
  input: [
    { required: true, message: '请输入 Input 内容', trigger: 'blur' },
    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入 Password', trigger: 'blur' },
    { min: 6, message: '密码至少 6 位', trigger: 'blur' }
  ],
  upload: {
    type: 'array' as const,
    required: true,
    message: '请上传文件',
    trigger: 'change'
  },
  radio: [{ required: true, message: '请选择 Radio 选项', trigger: 'change' }],
  check: [
    {
      type: 'array' as const,
      required: true,
      message: '请选择 Check 选项',
      trigger: 'change'
    }
  ],
  textarea: [
    { required: true, message: '请输入内容', trigger: 'change' },
    { min: 5, message: '长度不少于5个字符', trigger: 'change' }
  ]
})

const validate = () => {
  formRef.value
    ?.validate()
    .catch((error: ValidateFieldsError) => console.log('校验失败', error))
}
</script>

<template>
  <ne-form
    style="max-width: 440px"
    :model="formTest"
    :rules="formRules"
    ref="formRef"
    label-width="auto"
  >
    <ne-form-item label="Input" prop="input">
      <ne-input v-model="formTest.input" clearable></ne-input>
    </ne-form-item>

    <ne-form-item label="Password" prop="password">
      <ne-input v-model="formTest.password" show-password></ne-input>
    </ne-form-item>

    <ne-form-item label="Upload" prop="upload">
      <ne-upload
        v-model:file-list="formTest.upload"
        action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
      >
        <div class="upload">
          <ne-icon :icon="Plus" size="30" color="#e2e6f1"></ne-icon>
        </div>
      </ne-upload>
    </ne-form-item>

    <ne-form-item label="Radio" prop="radio">
      <ne-radio-group v-model="formTest.radio">
        <ne-radio value="1">Finish</ne-radio>
        <ne-radio value="2">Setup</ne-radio>
      </ne-radio-group>
    </ne-form-item>

    <ne-form-item label="Check" prop="check">
      <ne-checkbox-group v-model="formTest.check">
        <ne-checkbox value="1">Ln 80</ne-checkbox>
        <ne-checkbox value="2">Col 35</ne-checkbox>
      </ne-checkbox-group>
    </ne-form-item>

    <ne-form-item label="Textarea" prop="textarea">
      <ne-input type="textarea" v-model="formTest.textarea"></ne-input>
    </ne-form-item>

    <ne-form-item>
      <ne-button @click="validate" type="primary">校验</ne-button>
      <ne-button @click="formRef?.clearValidate()" type="primary" plain
        >清空</ne-button
      >
      <ne-button @click="formRef?.resetFields()" type="info" plain
        >重置</ne-button
      >
    </ne-form-item>
  </ne-form>
</template>

<style scoped lang="scss">
.upload {
  width: 100px;
  height: 100px;
  border: 1px #e2e6f1 dashed;
  border-radius: 4px;
  display: grid;
  place-content: center;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    border-color: #5ea3fd;
  }
}
</style>
