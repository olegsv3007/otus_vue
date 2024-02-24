<template>
  <NavMenu />
  <router-view></router-view>
  <Toast />
</template>

<script setup lang="ts">
import Toast from "primevue/toast";
import NavMenu from "./components/common/Nav/NavMenu.vue";
</script>

<style>
body {
  min-height: 100vh;
  padding: 0;
  margin: 0;
  margin-top: 64px;
}
#app {
  min-height: 100vh;
}
</style>