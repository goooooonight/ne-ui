<script setup lang="ts">
import { ref } from 'vue'

const size = ref('default')

const form = ref({
  username: '',
  email: '',
  password: '',
  gender: '',
  theme: '',
  interests: [],
  bio: ''
})
</script>

<template>
  <ne-radio-group v-model="size" style="margin-bottom: 20px">
    <ne-radio-button value="small">small</ne-radio-button>
    <ne-radio-button value="default">default</ne-radio-button>
    <ne-radio-button value="large">large</ne-radio-button>
  </ne-radio-group>

  <ne-form
    :model="form"
    label-width="auto"
    :size="size"
    style="max-width: 500px"
  >
    <ne-form-item label="Username" prop="username">
      <ne-input
        v-model="form.username"
        placeholder="Enter your username"
        clearable
      ></ne-input>
    </ne-form-item>

    <ne-form-item label="Email" prop="email" required>
      <ne-input
        v-model="form.email"
        placeholder="Enter your email address"
        clearable
      ></ne-input>
    </ne-form-item>

    <ne-form-item label="Password" prop="password" required>
      <ne-input
        v-model="form.password"
        placeholder="Enter your password"
        show-password
      ></ne-input>
    </ne-form-item>

    <ne-form-item label="Gender" prop="gender">
      <ne-radio-group v-model="form.gender">
        <ne-radio value="male">Male</ne-radio>
        <ne-radio value="female">Female</ne-radio>
        <ne-radio value="other">Other</ne-radio>
      </ne-radio-group>
    </ne-form-item>

    <ne-form-item label="Theme" prop="theme">
      <ne-radio-group v-model="form.theme">
        <ne-radio-button value="light">Light</ne-radio-button>
        <ne-radio-button value="dark">Dark</ne-radio-button>
        <ne-radio-button value="auto">Auto</ne-radio-button>
      </ne-radio-group>
    </ne-form-item>

    <ne-form-item label="Interests" prop="interests">
      <ne-checkbox-group v-model="form.interests">
        <ne-checkbox value="reading">Reading</ne-checkbox>
        <ne-checkbox value="music">Music</ne-checkbox>
        <ne-checkbox value="sports">Sports</ne-checkbox>
        <ne-checkbox value="travel">Travel</ne-checkbox>
      </ne-checkbox-group>
    </ne-form-item>

    <ne-form-item label="Bio" prop="bio">
      <ne-input
        type="textarea"
        v-model="form.bio"
        placeholder="Tell us about yourself"
      ></ne-input>
    </ne-form-item>
  </ne-form>
</template>
