<script setup lang="ts">
import { Airpods } from '@icon-park/vue-next'
</script>

<template>
  <div class="button-example">
    <div>
      <ne-button size="small">small</ne-button>
      <ne-button size="default">default</ne-button>
      <ne-button size="large">large</ne-button>
    </div>
    <div>
      <ne-button size="small" round>small</ne-button>
      <ne-button size="default" round>default</ne-button>
      <ne-button size="large" round>large</ne-button>
    </div>
    <div>
      <ne-button size="small" circle :icon="Airpods"></ne-button>
      <ne-button size="default" circle :icon="Airpods"></ne-button>
      <ne-button size="large" circle :icon="Airpods"></ne-button>
    </div>
  </div>
</template>

<style scoped>
.button-example {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
