<template>
  <Menubar :model="menuItems" class="h-4rem">
    <template #item="{ item, props }">
      <router-link v-slot="{ href, navigate }" :to="{name: item.route}" custom>
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import Menubar from "primevue/menubar";

const menuItems = [
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: 'home',
  },
  {
    label: 'Login',
    icon: 'pi pi-sign-in',
    route: 'login',
  },
];
</script>