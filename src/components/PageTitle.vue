<template>
  <h4 class="text-h4">{{ title }}</h4>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
