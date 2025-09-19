<script setup lang="ts">
import { Search } from '@icon-park/vue-next'
</script>

<template>
  <div class="example-group">
    <div class="example-group-row">
      <ne-input style="max-width: 200px">
        <template #prepend>Mr.</template>
      </ne-input>
      <ne-input>
        <template #append>Company</template>
      </ne-input>
    </div>
    <ne-input>
      <template #prepend>https://</template>
      <template #append>.com</template>
    </ne-input>
    <ne-input placeholder="Search anything...">
      <template #append>
        <ne-button :icon="Search" type="primary"></ne-button>
      </template>
    </ne-input>
  </div>
</template>

<style scoped>
.example-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.example-group-row {
  display: flex;
  gap: 15px;
}
</style>
