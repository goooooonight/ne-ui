<script setup lang="ts">
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const imgUrl = 'https://picsum.photos/id/1018/400/225'
</script>

<template>
  <div class="example-fit">
    <div v-for="fit in fits" :key="fit" class="example-fit-item">
      <span>{{ fit }}</span>
      <ne-avatar
        shape="square"
        :size="100"
        :src="imgUrl"
        :fit="fit"
      ></ne-avatar>
    </div>
  </div>
</template>

<style scoped>
.example-fit {
  display: flex;
  justify-content: space-between;
}
.example-fit-item {
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  span {
    display: block;
    margin-bottom: 6px;
  }
}
</style>
