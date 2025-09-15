<script setup lang="ts">
const imgUrl1 = 'https://api.dicebear.com/9.x/thumbs/svg?seed=Riley'
const imgUrl2 = 'https://api.dicebear.com/9.x/thumbs/svg?seed=Luis'

const sizes = ['large', 'default', 'small', 23]
</script>

<template>
  <div class="example-size">
    <div class="example-size-row">
      <ne-avatar
        v-for="size in sizes"
        :key="size"
        :src="imgUrl1"
        :size="size"
      ></ne-avatar>
    </div>
    <div class="example-size-row">
      <ne-avatar
        v-for="size in sizes"
        :key="size"
        :src="imgUrl2"
        shape="square"
        :size="size"
      ></ne-avatar>
    </div>
  </div>
</template>

<style scoped>
.example-size {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.example-size-row {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>
