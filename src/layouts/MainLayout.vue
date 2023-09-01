<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderComponent @toggleLeftDrawer="toggleLeftDrawer" />
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <ModulesComponent
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <FooterComponent />
  </q-layout>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import ModulesComponent from "components/ModulesComponent.vue";
import HeaderComponent from "./HeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import routeNames from "src/router/routeNames";

const linksList = ref([
  {
    title: "Front Desk Module",
    caption: "Front Desk Module",
    icon: "school",
    routeName: routeNames.HOME_MODULE,
    active: false,
  },

  {
    title: "Doctor",
    caption: "Doctor Module",
    icon: "school",
    routeName: routeNames.DOCTOR_MODULE,
    active: false,
  },

  {
    title: "Nurse",
    caption: "Nurse Module",
    icon: "school",
    routeName: routeNames.NURSE_MODULE,
    active: false,
  },
]);

const leftDrawerOpen = ref(false);
const route = useRoute();

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

watch(
  () => route.name,
  () => {
    linksList.value.forEach((ele) => {
      ele.active = false;
      if (ele.routeName === route.name) {
        ele.active = true;
      }
    });
  },
  { immediate: true }
);
</script>
