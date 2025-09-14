<script setup lang="ts">
import { ref } from 'vue'

const checkList = ref(['SMS', 'Alerts'])
</script>

<template>
  <ne-checkbox-group v-model="checkList">
    <ne-checkbox value="Email">Email</ne-checkbox>
    <ne-checkbox value="SMS">SMS</ne-checkbox>
    <ne-checkbox value="Push">Push</ne-checkbox>
    <ne-checkbox value="Sound">Sound</ne-checkbox>
    <ne-checkbox value="Alerts">Alerts</ne-checkbox>
  </ne-checkbox-group>
</template>
