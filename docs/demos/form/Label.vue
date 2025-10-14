<script setup lang="ts">
import { ref } from 'vue'

const labelPosition = ref('right')

const form = ref({
  name: '',
  email: '',
  phone: '',
  country: '',
  plan: '',
  features: [],
  description: ''
})
</script>

<template>
  <ne-radio-group v-model="labelPosition" style="margin-bottom: 20px">
    <ne-radio-button value="left">left</ne-radio-button>
    <ne-radio-button value="right">right</ne-radio-button>
    <ne-radio-button value="top">top</ne-radio-button>
  </ne-radio-group>

  <ne-form
    :model="form"
    label-width="auto"
    :label-position="labelPosition"
    style="max-width: 500px"
  >
    <ne-form-item label="Full Name" prop="name">
      <ne-input
        v-model="form.name"
        placeholder="Enter your full name"
        clearable
      ></ne-input>
    </ne-form-item>

    <ne-form-item label="Email Address" prop="email">
      <ne-input
        v-model="form.email"
        placeholder="Enter your email"
        clearable
      ></ne-input>
    </ne-form-item>

    <ne-form-item label="Phone Number" prop="phone">
      <ne-input
        v-model="form.phone"
        placeholder="Enter your phone number"
        clearable
      ></ne-input>
    </ne-form-item>

    <ne-form-item label="Country" prop="country">
      <ne-radio-group v-model="form.country">
        <ne-radio value="us">United States</ne-radio>
        <ne-radio value="uk">United Kingdom</ne-radio>
        <ne-radio value="ca">Canada</ne-radio>
      </ne-radio-group>
    </ne-form-item>

    <ne-form-item label="Subscription Plan" prop="plan">
      <ne-radio-group v-model="form.plan">
        <ne-radio-button value="basic">Basic</ne-radio-button>
        <ne-radio-button value="pro">Pro</ne-radio-button>
        <ne-radio-button value="enterprise">Enterprise</ne-radio-button>
      </ne-radio-group>
    </ne-form-item>

    <ne-form-item label="Additional Features" prop="features">
      <ne-checkbox-group v-model="form.features">
        <ne-checkbox value="analytics">Analytics</ne-checkbox>
        <ne-checkbox value="support">Priority Support</ne-checkbox>
        <ne-checkbox value="backup">Auto Backup</ne-checkbox>
      </ne-checkbox-group>
    </ne-form-item>

    <ne-form-item label="Project Description" prop="description">
      <ne-input
        type="textarea"
        v-model="form.description"
        placeholder="Describe your project requirements"
        :rows="4"
      ></ne-input>
    </ne-form-item>
  </ne-form>
</template>
