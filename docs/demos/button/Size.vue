<script setup lang="ts">
import { IpAirpods } from 'vue-icons-plus/ip'
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
      <ne-button size="small" circle :icon="IpAirpods"></ne-button>
      <ne-button size="default" circle :icon="IpAirpods"></ne-button>
      <ne-button size="large" circle :icon="IpAirpods"></ne-button>
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
