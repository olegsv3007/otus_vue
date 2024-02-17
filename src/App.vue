<template>
  <NavMenu />
  <router-view></router-view>
  <Toast />
</template>

<script setup lang="ts">
import Toast from "primevue/toast";
import NavMenu from "./components/common/Nav/NavMenu.vue";
</script>