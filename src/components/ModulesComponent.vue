<template>
  <q-item clickable @click="goto">
    <q-item-section v-if="icon" avatar>
      <q-icon :class="{ 'text-primary': active }" :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label :class="{ 'text-primary': active }">{{
        title
      }}</q-item-label>
      <q-item-label caption :class="{ 'text-primary': active }">{{
        caption
      }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: "",
  },

  routeName: {
    type: String,
    default: "#",
  },

  active: {
    type: Boolean,
    default: false,
  },

  icon: {
    type: String,
    default: "",
  },
});
const router = useRouter();
const goto = () => {
  router.push({ name: props.routeName });
};
</script>
