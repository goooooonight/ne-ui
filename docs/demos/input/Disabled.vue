<template>
  <div class="example-disabled">
    <ne-input placeholder="disabled input" disabled></ne-input>
    <ne-input
      type="textarea"
      placeholder="disabled textarea"
      disabled
    ></ne-input>
  </div>
</template>

<style scoped>
.example-disabled {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
