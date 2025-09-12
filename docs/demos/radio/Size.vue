<script setup lang="ts">
import { ref } from 'vue'

const radio1 = ref('verySatisfied')
const radio2 = ref('verySatisfied')
const radio3 = ref('verySatisfied')
</script>

<template>
  <div class="example-size">
    <ne-radio-group v-model="radio1" size="small">
      <ne-radio value="verySatisfied">Very Satisfied</ne-radio>
      <ne-radio value="satisfied">Satisfied</ne-radio>
      <ne-radio value="neutral">Neutral</ne-radio>
      <ne-radio value="dissatisfied">Dissatisfied</ne-radio>
      <ne-radio value="veryDissatisfied">Very Dissatisfied</ne-radio>
    </ne-radio-group>
  </div>

  <div class="example-size">
    <ne-radio-group v-model="radio2" size="default">
      <ne-radio value="verySatisfied">Very Satisfied</ne-radio>
      <ne-radio value="satisfied">Satisfied</ne-radio>
      <ne-radio value="neutral">Neutral</ne-radio>
      <ne-radio value="dissatisfied">Dissatisfied</ne-radio>
      <ne-radio value="veryDissatisfied">Very Dissatisfied</ne-radio>
    </ne-radio-group>
  </div>

  <div>
    <ne-radio-group v-model="radio3" size="large">
      <ne-radio value="verySatisfied">Very Satisfied</ne-radio>
      <ne-radio value="satisfied">Satisfied</ne-radio>
      <ne-radio value="neutral">Neutral</ne-radio>
      <ne-radio value="dissatisfied">Dissatisfied</ne-radio>
      <ne-radio value="veryDissatisfied">Very Dissatisfied</ne-radio>
    </ne-radio-group>
  </div>
</template>

<style scoped>
.example-size {
  margin-bottom: 10px;
}
</style>
