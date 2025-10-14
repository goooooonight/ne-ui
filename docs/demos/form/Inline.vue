<script setup lang="ts">
import { ref } from 'vue'

const formRef = ref()

const form = ref({
  input: '',
  radio: 'Black'
})
</script>

<template>
  <ne-form ref="formRef" :model="form" label-width="auto" inline>
    <ne-form-item label="Input" required>
      <ne-input v-model="form.input"></ne-input>
    </ne-form-item>
    <ne-form-item label="Radio">
      <ne-radio-group v-model="form.radio">
        <ne-radio-button value="Black">Black</ne-radio-button>
        <ne-radio-button value="White">White</ne-radio-button>
      </ne-radio-group>
    </ne-form-item>
    <ne-form-item style="margin-left: auto">
      <ne-button round>Submit</ne-button>
    </ne-form-item>
  </ne-form>
</template>
