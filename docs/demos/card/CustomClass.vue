<template>
  <ne-card
    header-class="header-custom"
    body-class="body-custom"
    footer-class="footer-custom"
    style="max-width: 400px"
  >
    <template #header>Custom Class Card</template>
    <p>The only way to do great work is to love what you do.</p>
    <template #footer>This Area Is Disabled</template>
  </ne-card>
</template>

<style scoped>
:deep(.header-custom) {
  font-size: 18px;
  font-weight: 600;
  text-align: end;
}
:deep(.body-custom) {
  background-color: #fafafc;
  font-style: italic;
}
:deep(.footer-custom) {
  cursor: not-allowed;
}
</style>
