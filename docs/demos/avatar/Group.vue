<script setup lang="ts">
import { IpPeople, IpPeopleSafe } from 'vue-icons-plus/ip'
</script>

<template>
  <div class="example-group">
    <ne-avatar-group shape="square">
      <ne-avatar
        src="https://api.dicebear.com/9.x/big-smile/svg?seed=Sara&backgroundColor=c0aede"
      ></ne-avatar>
      <ne-avatar>Max</ne-avatar>
      <ne-avatar
        src="https://api.dicebear.com/9.x/bottts/svg?seed=Luis&backgroundColor=ffd5dc"
      ></ne-avatar>
      <ne-avatar :icon="IpPeople"></ne-avatar>
    </ne-avatar-group>

    <ne-avatar-group shape="circle">
      <ne-avatar :icon="IpPeopleSafe"></ne-avatar>
      <ne-avatar
        src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Kingston"
        >Max</ne-avatar
      >
      <ne-avatar
        src="https://api.dicebear.com/9.x/fun-emoji/svg?seed=Sadie"
      ></ne-avatar>
      <ne-avatar>Dr</ne-avatar>
    </ne-avatar-group>
  </div>
</template>

<style scoped>
.example-group {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
</style>
