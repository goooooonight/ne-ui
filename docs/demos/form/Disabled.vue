<script setup lang="ts">
import { Plus } from '@icon-park/vue-next'
import { ref } from 'vue'

const isDisabled = ref(false)

const form = ref({
  input: '',
  password: '',
  upload: [],
  radio: '',
  radioButton: '',
  check: [],
  textarea: ''
})
</script>

<template>
  <ne-radio-group v-model="isDisabled" style="margin-bottom: 20px">
    <ne-radio-button :value="true">Disabled</ne-radio-button>
    <ne-radio-button :value="false">Usable</ne-radio-button>
  </ne-radio-group>

  <ne-form
    :model="form"
    label-width="auto"
    :disabled="isDisabled"
    style="max-width: 500px"
  >
    <ne-form-item label="Input" prop="input">
      <ne-input v-model="form.input"></ne-input>
    </ne-form-item>

    <ne-form-item label="Password" prop="password" required>
      <ne-input v-model="form.password" show-password></ne-input>
    </ne-form-item>

    <ne-form-item label="Upload" prop="upload">
      <ne-upload
        v-model:file-list="form.upload"
        action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
      >
        <div class="upload" :class="{ 'upload-disabled': isDisabled }">
          <ne-icon :icon="Plus" size="30" color="#e2e6f1"></ne-icon>
        </div>
      </ne-upload>
    </ne-form-item>

    <ne-form-item label="Radio" prop="radio">
      <ne-radio-group v-model="form.radio">
        <ne-radio value="1">$0 - 50</ne-radio>
        <ne-radio value="2">$50 - 100</ne-radio>
      </ne-radio-group>
    </ne-form-item>

    <ne-form-item label="Radio-Button" prop="radioButton">
      <ne-radio-group v-model="form.radioButton">
        <ne-radio-button value="1">black</ne-radio-button>
        <ne-radio-button value="2">white</ne-radio-button>
      </ne-radio-group>
    </ne-form-item>

    <ne-form-item label="Check" prop="check">
      <ne-checkbox-group v-model="form.check">
        <ne-checkbox value="niceee">red</ne-checkbox>
        <ne-checkbox value="pluto">blue</ne-checkbox>
      </ne-checkbox-group>
    </ne-form-item>

    <ne-form-item label="Textarea" prop="textarea">
      <ne-input type="textarea" v-model="form.textarea"></ne-input>
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

.upload-disabled {
  background-color: #f5f6fa;
  cursor: not-allowed;

  &:hover {
    border-color: #e2e6f1;
  }
}
</style>
