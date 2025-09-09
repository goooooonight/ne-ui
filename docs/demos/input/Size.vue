<template>
  <div class="example-size">
    <div class="example-size-row">
      <ne-input size="small" placeholder="small size"></ne-input>
      <ne-input size="default" placeholder="default size"></ne-input>
      <ne-input size="large" placeholder="large size"></ne-input>
    </div>
    <div class="example-size-row">
      <ne-input
        type="textarea"
        size="small"
        placeholder="small size"
      ></ne-input>
      <ne-input
        type="textarea"
        size="default"
        placeholder="default size"
      ></ne-input>
      <ne-input
        type="textarea"
        size="large"
        placeholder="large size"
      ></ne-input>
    </div>
  </div>
</template>

<style scoped>
.example-size {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.example-size-row {
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
