<template>
  <q-footer elevated>
    <q-toolbar class="footer-toolbar">
      <q-toolbar-title class="flex flex-center"
        >Copyright {{ year }}</q-toolbar-title
      >
    </q-toolbar>
  </q-footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style lang="scss" scoped>
.footer-toolbar {
  min-height: 30px;
  .q-toolbar__title {
    font-size: 12px;
  }
}
</style>
