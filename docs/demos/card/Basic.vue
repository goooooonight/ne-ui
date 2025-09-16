<template>
  <ne-card style="max-width: 400px">
    <template #header>This is Header</template>
    <p v-for="num in 4" :key="num">This is Card content {{ num }}</p>
    <p>...</p>
    <template #footer>This is Footer</template>
  </ne-card>
</template>

<style scoped>
p {
  margin: 0;
}
</style>
