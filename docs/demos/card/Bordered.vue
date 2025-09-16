<template>
  <div class="example-bordered">
    <ne-card :bordered="false" style="max-width: 400px">
      <template #header>Borderless Card</template>
      <p v-for="num in 4" :key="num">This is Card content {{ num }}</p>
      <p>...</p>
      <template #footer>This is Footer</template>
    </ne-card>
  </div>
</template>

<style scoped>
.example-bordered {
  padding: 20px;
  background-color: #f0f2f5;
}
p {
  margin: 0;
}
</style>
